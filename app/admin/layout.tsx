import AdminSidebar from "../components/admin/AdminSidebar";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex gap-3 ">
      <AdminSidebar />
      <div>{children}</div>
    </div>
  );
};

export default AdminLayout;
