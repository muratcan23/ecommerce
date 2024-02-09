"use client";
import { usePathname } from "next/navigation";
import { MdBorderOuter, MdDashboard, MdOutlineCreate } from "react-icons/md";
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
      icon: MdOutlineCreate,
      url: "/admin/create",
    },
    {
      name: "Manage Products",
      icon: MdOutlineCreate,
      url: "/admin/manage",
    },
    {
      name: "My orders",
      icon: MdBorderOuter,
      url: "/admin/order",
    },
  ];
  return (
    <div className="w-1/5 border-r h-screen p-4 bg-orange-600">
      <div className="space-y-4">
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
