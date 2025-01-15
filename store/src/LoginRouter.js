import { Navigate, Outlet } from "react-router-dom";

const LoginRouter = ({ redirectPath = "/login" }) => {
  const token = localStorage.getItem("jwt_token");

  if (!token) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};

export default LoginRouter;
