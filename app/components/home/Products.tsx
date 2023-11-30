import { products } from "@/public/utils/Products";
import Heading from "../general/Heading";
import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <div>
      <Heading text="all products" center={false} />
      <div>
        {products.map((product) => {
          <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default Products;
