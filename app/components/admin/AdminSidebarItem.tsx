import Link from "next/link";
import { IconType } from "react-icons";

interface AdminSidebarItem {
  selected?: boolean;
  name: string;
  icon: IconType;
  url: string;
}
const AdminSidebarItem: React.FC<AdminSidebarItem> = ({
  selected,
  name,
  icon: Icon,
  url,
}) => {
  return (
    <Link
      className={`cursor-pointer flex items-center gap-2  ${
        selected
          ? "text-slate-600 font-bold"
          : " text-white font-medium hover:bg-orange-400 p-1 rounded-md"
      }`}
      href={url}
    >
      <Icon size={25} />
      <div>{name}</div>
    </Link>
  );
};

export default AdminSidebarItem;
