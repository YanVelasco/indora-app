import { Navigate } from "react-router-dom";
import { isAuthenticated, getUserRoles } from "./auth";

// Componente para proteger rotas por role
export default function RequireRole({ role, children, redirectTo = "/signin" }) {
  if (!isAuthenticated()) return <Navigate to={redirectTo} replace />;
  const roles = getUserRoles();
  if (!roles.includes(role)) return <Navigate to="/" replace />;
  return children;
}
