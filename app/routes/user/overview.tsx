import { useOutletContext } from "react-router";
import type { UserType } from "~/hooks/use-auth";

export default function Overview() {
  const user = useOutletContext<UserType>();
  return <h1>{user.email}</h1>;
}
