import { useOutletContext } from "react-router";
import type { UserType } from "~/hooks/use-auth";

export default function Overview() {
  const user = useOutletContext<UserType>();

  return (
    <>
      <div className="w-3/5 flex flex-col gap-4">
        <div className="overview-grid gap-4">
          <div className="border p-4 aspect-square rounded-sm">Revenue</div>
          <div className="border p-4 aspect-square rounded-sm">Sales</div>
          <div className="border p-4 aspect-square rounded-sm">Customers</div>
        </div>

        <div className="border rounded-sm h-full">chart/table</div>
      </div>

      <div className="border w-1/5 rounded-sm">Pending orders</div>
      <div className="border w-1/5 rounded-sm">Messages</div>
    </>
  );
}
