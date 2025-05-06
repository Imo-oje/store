import { useAuth } from "~/hooks/use-auth";
import { Navigate, Outlet } from "react-router";
import { LoaderCircle } from "lucide-react";

export default function Dashboard() {
  const { data, isLoading } = useAuth();

  return isLoading ? (
    <div className="w-screen h-screen flex items-center justify-center">
      <LoaderCircle size={60} className="animate-spin" />
    </div>
  ) : data ? (
    <div>
      <Outlet />
    </div>
  ) : (
    <Navigate
      to="/auth/login"
      replace
      state={{ redirectUrl: window.location.pathname }}
    /> //state redirect user back to original request
  );
}
