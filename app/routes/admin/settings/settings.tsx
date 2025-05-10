import type { Route } from "./+types/settings";
import { useState } from "react";
import GeneralSettings from "./general";
import PaymentSettings from "./payments";
import ProductAndListingSettings from "./product";
import UserSettings from "./user";
import FeeSettings from "./fees";
import AccessControlSettings from "./access-control";
import SecuritySettings from "./security";
import {
  CircleDollarSign,
  Fingerprint,
  HandCoins,
  KeyRound,
  Settings,
  Store,
  User2,
} from "lucide-react";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Admin | Settings" }];
}

const settings = [
  {
    name: "General",
    element: <GeneralSettings />,
    icon: <Settings size={18} />,
  },
  {
    name: "Payments",
    element: <PaymentSettings />,
    icon: <HandCoins size={18} />,
  },
  {
    name: "Products & Listings",
    element: <ProductAndListingSettings />,
    icon: <Store size={18} />,
  },
  {
    name: "User Management",
    element: <UserSettings />,
    icon: <User2 size={18} />,
  },
  {
    name: "Fees",
    element: <FeeSettings />,
    icon: <CircleDollarSign size={18} />,
  },
  {
    name: "Access Control",
    element: <AccessControlSettings />,
    icon: <KeyRound size={18} />,
  },
  {
    name: "Security",
    element: <SecuritySettings />,
    icon: <Fingerprint size={18} />,
  },
];

export default function () {
  const [currentView, setCurrentView] = useState(0);
  return (
    <>
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
      </div>
      <div className="flex space-x-6">
        <nav className="w-2/12 p-2 rounded-lg">
          <ul className="flex flex-col gap-1 text-left">
            {settings.map((setting, index) => (
              <li
                onClick={() => setCurrentView(index)}
                className={`p-3 flex items-center text-sm transition-colors cursor-default rounded-sm ${
                  currentView === index
                    ? "bg-primary text-primary-foreground"
                    : "text-secondary-foreground hover:text-muted-foreground hover:bg-muted"
                }`}
              >
                <span className="float-left mr-3">{setting.icon}</span>{" "}
                <p>{setting.name}</p>
              </li>
            ))}
          </ul>
        </nav>
        <main className="w-full rounded-sm p-2">
          {settings[currentView].element}
        </main>
      </div>
    </>
  );
}
