import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../../Firebase";
import { setDoc, doc } from "firebase/firestore";
import "./LoginForm.css"

const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Save user data to Firestore
      await setDoc(doc(db, "users", user.uid), {
        name,
        email,
      });

      alert("Registration successful!");
      navigate("/login");
    } catch (error) {
      alert("Registration failed: " + error.message);
    }
  };

  return (
    <div className="body">
      <table className="Regi-container">
      <tr>
          <td className="logo">
            <img src="logo2.png"/>
          </td>
        </tr>
        <tr>
          <td>
            <h1>Register</h1>
          </td>
        </tr>
        <tr>
          <td>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </td>
        </tr>
        <tr>
          <td>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </td>
        </tr>
        <tr>
          <td>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </td>
        </tr>
        <tr>
          <td>
            <button onClick={handleRegister} className="login-button">Register</button>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default RegistrationForm;
