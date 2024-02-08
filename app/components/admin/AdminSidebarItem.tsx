import Link from "next/link";
import { IconType } from "react-icons";

interface AdminSidebarItem {
  selected?: boolean;
  name: string;
  icon: IconType;
  url: string;
}

const AdminSidebarItem: React.FC<AdminSidebarItem> = ({
  name,
  selected,
  icon: Icon,
  url,
}) => {
  return (
    <Link
      className={`felx items-center gap-2 cursor-pointer ${
        selected ? "text-red font-bold" : "text-slate-500 font-medium"
      }`}
      href={url}
    >
      <Icon size={25} />
      <div> {name}</div>
    </Link>
  );
};

export default AdminSidebarItem;
