import { Navigate, Outlet } from "react-router-dom";

function SPRoute({ isLogged }) {
  return isLogged === '0' ? <Outlet /> : <Navigate to="/" />;
}

export default SPRoute;