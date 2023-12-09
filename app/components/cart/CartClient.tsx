"use client";

import useCart from "@/hooks/useCart";
import PageContainer from "../conatiners/PageContainer";

const CartClient = () => {
  const { cartPrdcts } = useCart();
  console.log(cartPrdcts);
  return (
    <div>
      <PageContainer>Client cart</PageContainer>
    </div>
  );
};

export default CartClient;
