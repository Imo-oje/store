import type { UserType } from "~/hooks/use-auth";

export default function StoreNavBar({ email }: UserType) {
  return (
    <>
      <nav className="border p-2 rounded-sm flex justify-between items-center">
        <select
          id="select-store"
          name="select-store"
          className="p-2 border rounded-sm"
        >
          <option value="one">My favorite store</option>
          <option value="two">Another store</option>
        </select>

        <h2 className="font-bold capitalize">Your store name here</h2>

        <div className="p-2 flex items-center gap-2">
          <span>{email}</span>
          <div className="border w-10 h-10 rounded-full flex items-center justify-center uppercase cursor-pointer">
            ES
          </div>
        </div>
      </nav>
    </>
  );
}
