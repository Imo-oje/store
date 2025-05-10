import { Outlet, useOutletContext } from "react-router";
import type { UserType } from "~/hooks/use-auth";

export default function Dashboard() {
  const user = useOutletContext<UserType>();
  return <Outlet context={user} />;
}
