"use client";

import useCart from "@/hooks/useCart";
import PageContainer from "../conatiners/PageContainer";

const CartClient = () => {
  const { cartPrdcts } = useCart();
  console.log(cartPrdcts);
  if (!cartPrdcts || cartPrdcts.length == 0) {
    return <div>"There is no product in your cart..."</div>;
  }

  return (
    <div className="my-3 md:my-10">
      <PageContainer>
        <div className="flex items-center gap-3 justify-between">
          <div>Product Img</div>
          <div>Product Name</div>
          <div>Product quantity</div>
          <div>Product Price</div>
        </div>
      </PageContainer>
    </div>
  );
};

export default CartClient;
