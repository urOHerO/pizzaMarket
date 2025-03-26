import { ReactNode } from "react";
import { Navigate } from "react-router";

const RequireAuth = ({ children }: { children: ReactNode }) => {
  const jwt = localStorage.getItem('jwt');
  if (!jwt) {
    return <Navigate to="/auth/login" replace />;
  }
  return children;
};

export default RequireAuth;
