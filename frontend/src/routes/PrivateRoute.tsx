import { Navigate } from "react-router-dom";
import { getAuthentication } from "../auth/getAuthentication";

export function PrivateRoute({ children }) {
  const token = getAuthentication();

  if (!token) {
    return <Navigate to={"/"} replace />
  };

  return children;
};