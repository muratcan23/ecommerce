import { getCurrentUser } from "@/app/actions/getCurrentUser";
import getProducts from "@/app/actions/getProducts";
import ManageClient from "@/app/components/admin/ManageClient";
import Authcontainer from "@/app/components/conatiners/AuthContainer";
import WarningText from "@/app/components/navbar/WarningText";

const page = async () => {
  const products = await getProducts({ category: null });
  const currentUser = await getCurrentUser();

  if (!currentUser || currentUser.role !== "ADMIN") {
    return <WarningText text="Forbidden area !!!" />;
  }
  return (
    <Authcontainer>
      <ManageClient products={products} />
    </Authcontainer>
  );
};

export default page;
