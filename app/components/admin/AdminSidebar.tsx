"use client";
import { usePathname } from "next/navigation";
import { MdBorderColor, MdDashboard, MdOutlineCreate } from "react-icons/md";
import AdminSidebarItem from "./AdminSidebarItem";

const AdminSidebar = () => {
  const pathname = usePathname();

  const adminPanel = [
    {
      name: "Summaries",
      icon: MdDashboard,
      url: "/admin",
    },
    {
      name: "Create Product",
      icon: MdBorderColor,
      url: "/admin/create",
    },
    {
      name: "My orders",
      icon: MdOutlineCreate,
      url: "/admin/order",
    },
  ];

  return (
    <div className="w-1/5 border-r h-screen ">
      <div>
        {adminPanel.map((admin, i) => (
          <AdminSidebarItem
            key={i}
            admin={admin}
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
