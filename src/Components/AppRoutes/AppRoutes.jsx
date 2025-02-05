import { BrowserRouter, Route, Routes } from "react-router-dom";
import Customers from "../../pages/Customers/Index";
import Dashboard from "../../pages/Dashbaord/Index";
import Inventory from "../../pages/Inventory/Index";
import Orders from "../../pages/Orders/Index";
import AppFooter from "../AppFooter/AppFooter";
import AppHeader from "../AppHeader/AppHeader";
import SideMenu from "../SideMenu/Index";
 import LoginForm from "../../pages/LoginRegistration/LoginForm";
import RegistrationForm from "../../pages/LoginRegistration/RegistrationForm";

function AppRoutes() {
  return (
    <>
    <Routes>
     <Route path="/register" element={<RegistrationForm/>}></Route>
     <Route path="/login" element={<LoginForm/>}></Route>
    </Routes>  
      <AppHeader />
      <SideMenu/>
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/inventory" element={<Inventory />}></Route>
        <Route path="/orders" element={<Orders />}></Route>
        <Route path="/customers" element={<Customers />}></Route>
      </Routes>
      <AppFooter />
    </>
  );
}
export default AppRoutes;
