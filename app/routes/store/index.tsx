import { Outlet, useOutletContext } from "react-router";
import type { UserType } from "~/hooks/use-auth";
import type { Route } from "./+types/index";
import StoreSideBar from "~/components/store/store-sidebar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Store" },
    { description: "Store description", content: "some store content" },
  ];
}

export default function Index() {
  const user = useOutletContext<UserType>();

  return (
    <>
      <div className="h-screen flex gap-4">
        <StoreSideBar />
        <Outlet context={user} />
      </div>
    </>
  );
}
