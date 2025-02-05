import AppRoutes from "../AppRoutes/AppRoutes";
import { BrowserRouter } from "react-router-dom";

function PageContent() {
  return (
    <div className="PageContent">
      <BrowserRouter>
      <AppRoutes />
      </BrowserRouter>
    </div>
  );
}
export default PageContent;
