import { useEffect } from "react";
import { Navigate, Outlet } from "react-router"; // use react-router-dom, not react-router
import { useAuth } from "~/hooks/use-auth";

export default function Dashboard() {
  const { data: user } = useAuth();

  if (user && user.role.name !== "ADMIN") {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}
