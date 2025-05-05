import { Navigate } from "react-router-dom";
import style from "./ProtectedRoute.module.css";

function ProtectedRoute({ children }) {
  const token = localStorage.getItem("userToken");
  if (token) return children;
  return <Navigate to="/Login"></Navigate>;
}

export default ProtectedRoute;
