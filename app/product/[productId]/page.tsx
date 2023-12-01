import DetailClient from "@/app/components/detail/DetailClient";
import { products } from "@/public/utils/Products";

type Detail = {
  productId?: string;
};

const Detail = ({ params }: { params: Detail }) => {
  const { productId } = params;

  const product = products.find((product) => product.id == productId);

  return (
    <div>
      <DetailClient product={product} />
    </div>
  );
};

export default Detail;
