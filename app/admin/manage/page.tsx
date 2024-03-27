import { getCurrentUser } from "@/app/actions/getCurrentUser";
import ManageClient from "@/app/components/admin/ManageClient";
import Authcontainer from "@/app/components/conatiners/AuthContainer";
import WarningText from "@/app/components/navbar/WarningText";

const page = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser || currentUser.role !== "ADMIN") {
    return <WarningText text="Forbidden area !!!" />;
  }
  return (
    <Authcontainer>
      <ManageClient />
    </Authcontainer>
  );
};

export default page;
