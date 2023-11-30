import textClip from "@/public/utils/TextClip";
import { Rating } from "@mui/material";
import Image from "next/image";

const ProductCard = ({ product }: { product: any }) => {
  return (
    <div className="w-[240px] cursor-pointer flex flex-col flex-1 shadow-lg p-2 rounded-md ">
      <div className="relative h-[150px] ">
        <Image src={product.image} fill alt="" className="object-contain" />
      </div>
      <div className="text-center mt-2">
        <div>{textClip(product.name)}</div>
        <Rating name="read-only" value={4} readOnly />
        <div className="text-orange-600 font-bold  text-lg md:text-xl">
          {product.price}{" "}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
