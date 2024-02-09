"use client";
import { usePathname } from "next/navigation";
import { BsBasketFill } from "react-icons/bs";
import { FaExchangeAlt } from "react-icons/fa";
import { IoCreate } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";

import AdminSidebarItem from "./AdminSidebarItem";

const AdminSidebar = () => {
  const pathname = usePathname();
  const adminPanel = [
    {
      name: "sumamry",
      icon: MdDashboard,
      url: "/admin",
    },
    {
      name: "Create Product",
      icon: IoCreate,
      url: "/admin/create",
    },
    {
      name: "Manage Products",
      icon: FaExchangeAlt,
      url: "/admin/manage",
    },
    {
      name: "My orders",
      icon: BsBasketFill,
      url: "/admin/order",
    },
  ];
  return (
    <div className="w-1/5 border-r h-screen p-4 bg-orange-600">
      <div className="space-y-4 ">
        {adminPanel.map((admin, i) => (
          <AdminSidebarItem
            key={i}
            selected={pathname == admin.url}
            icon={admin.icon}
            name={admin.name}
            url={admin.url}
          />
        ))}
      </div>
    </div>
  );
};

export default AdminSidebar;
