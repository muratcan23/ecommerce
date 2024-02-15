import { getCurrentUser } from "@/app/actions/getCurrentUser";
import Createform from "@/app/components/admin/CreateForm";
import AuthContainer from "@/app/components/conatiners/AuthContainer";
import WarningText from "@/app/components/navbar/WarningText";

const CreateProduct = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser || currentUser.role !== "ADMIN") {
    return <WarningText text="Buraya Girişin Yasaklı !!!" />;
  }
  return (
    <AuthContainer>
      <Createform />
    </AuthContainer>
  );
};

export default CreateProduct;
