import { Outlet, useOutletContext } from "react-router";
import type { UserType } from "~/hooks/use-auth";
import type { Route } from "./+types/index";
import StoreSideBar from "~/components/store/store-sidebar";
import StoreNavBar from "~/components/store/store-nav-bar";

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
        <div className="w-full flex gap-4 flex-col">
          <StoreNavBar {...user} />
          <main className="w-full flex justify-between gap-4 h-full pb-2">
            <Outlet context={user} />
          </main>
        </div>
      </div>
    </>
  );
}
