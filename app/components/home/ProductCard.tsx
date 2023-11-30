import Image from "next/image";

const ProductCard = ({ product }: { product: any }) => {
  return (
    <div className="w-[240px] shadow-lg p-2">
      <div className="relative">
        <Image src={product.image} fill alt="" className="" />
      </div>
    </div>
  );
};

export default ProductCard;
