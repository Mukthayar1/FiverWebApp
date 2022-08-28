import { Navigate, Outlet } from "react-router-dom";

function AdminRoute({ isLogged }) {
  return isLogged === 'super' ? <Outlet /> : <Navigate to="/" />;
}

export default AdminRoute;