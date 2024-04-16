"use client";
import UseCart from "@/hooks/useCart";
import { useRouter } from "next/navigation";
import { MdShoppingBasket } from "react-icons/md";
const CardCount = () => {
  const { cartPrdcts } = UseCart();
  const router = useRouter();
  return (
    <div
      onClick={() => router.push("/cart")}
      className="hidden md:flex relative cursor-pointer group"
    >
      <MdShoppingBasket
        size="30"
        className="text-white group-hover:text-orange-900"
      />
      <div className="absolute -top-1 -right-2 text-xs bg-orange-900 w-5 h-5 flex items-center justify-center rounded-full group-hover:bg-gray-200 group-hover:text-orange-900">
        {cartPrdcts?.length}
      </div>
    </div>
  );
};

export default CardCount;
