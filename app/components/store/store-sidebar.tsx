import { useState } from "react";
import { Link, useNavigate } from "react-router";
import {
  PanelRightOpen,
  PanelRightClose,
  ChartNoAxesGantt,
  ChartArea,
  ShoppingBasket,
  MessagesSquare,
  Settings,
  LogOut,
} from "lucide-react";
import { motion } from "framer-motion";
import { useMutation } from "@tanstack/react-query";
import { logout } from "~/api/api";
import { getSideBarState } from "~/lib/utils";

export default function StoreSideBar() {
  const [navItems, setNavItems] = useState([
    { name: "Overview", icon: <ChartNoAxesGantt /> },
    { name: "Analytics", icon: <ChartArea /> },
    { name: "Products", icon: <ShoppingBasket /> },
    { name: "Conversations", icon: <MessagesSquare /> },
    { name: "Settings", icon: <Settings /> },
  ]);
  const [isOpen, setIsOpen] = useState(getSideBarState());
  const navigate = useNavigate();

  console.log(isOpen);

  const { mutate: mutLogout } = useMutation({
    mutationFn: logout,
    onSuccess: (data) => {
      navigate("/auth/login");
    },
  });

  return (
    <>
      <nav
        className={`border h-full rounded-sm transition-all duration-300 overflow-hidden flex flex-col ${
          isOpen ? "w-[14rem]" : "w-[3.5rem] min-w-[3.5rem]"
        }`}
      >
        <div className="p-2 flex items-center justify-between transition-all duration-300 overflow-hidden">
          {isOpen && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <Link to="/store" className="text-nowrap font-bold uppercase">
                Store Logo
              </Link>
            </motion.div>
          )}

          <span
            onClick={() =>
              setIsOpen((prevState) => {
                localStorage.setItem("side-bar", prevState ? "close" : "open");
                return !prevState;
              })
            }
            className="cursor-pointer p-2"
          >
            {isOpen ? <PanelRightOpen /> : <PanelRightClose />}
          </span>
        </div>
        <ul className="p-2 flex flex-col gap-4 flex-grow rounded-sm">
          {navItems.map((item, index) => (
            <li
              key={index}
              className={`flex items-center cursor-pointer bg-gray-700 rounded-sm transition-all duration-300 overflow-hidden ${
                isOpen ? "gap-4 p-4" : "p-2 justify-center"
              }`}
            >
              <span>{item.icon}</span>
              <h3
                className={`transition-all duration-300 whitespace-nowrap overflow-hidden ${
                  isOpen ? "opacity-100 max-w-[200px]" : "opacity-0 max-w-0"
                }`}
              >
                {item.name}
              </h3>
            </li>
          ))}
        </ul>
        <div className="p-2 w-full h-18 justify-self-end">
          <li
            onClick={() => mutLogout()}
            className={`flex items-center cursor-pointer bg-gray-700 rounded-sm transition-all duration-300 overflow-hidden ${
              isOpen ? "gap-4 p-4" : "p-2 justify-center"
            }`}
          >
            <span>
              <LogOut />
            </span>
            <h3
              className={`transition-all duration-300 whitespace-nowrap overflow-hidden ${
                isOpen ? "opacity-100 max-w-[200px]" : "opacity-0 max-w-0"
              }`}
            >
              Logout
            </h3>
          </li>
        </div>
      </nav>
    </>
  );
}
