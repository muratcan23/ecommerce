"use client";

import useCart from "@/hooks/useCart";
import Image from "next/image";
import PageContainer from "../conatiners/PageContainer";
import Button from "../general/Button";

const CartClient = () => {
  const { cartPrdcts, removeFromCart, removeCart } = useCart();
  console.log(cartPrdcts);
  if (!cartPrdcts || cartPrdcts.length == 0) {
    return <div>"There is no product in your cart..."</div>;
  }

  return (
    <div className="my-3 md:my-10">
      <PageContainer>
        <div className="flex items-center gap-3 text-center font-bold border-b py-3">
          <div className="w-1/5">Product Img</div>
          <div className="w-1/5">Product Name</div>
          <div className="w-1/5">Product quantity</div>
          <div className="w-1/5">Product Price</div>
        </div>
        <div>
          {cartPrdcts.map((cart) => (
            <div
              className="flex items-center justify-between text-center my-5"
              key={cart.id}
            >
              <div className="w-1/5 flex items-center justify-center">
                <Image src={cart.image} width={40} height={40} alt="" />
              </div>
              <div className="w-1/5">{cart.name} </div>
              <div className="w-1/5">2</div>
              <div className="w-1/5 text-orange-600 text-lg">{cart.price}₺</div>
              <div className="w-1/5">
                <Button
                  text="Remove product"
                  small
                  onClick={() => removeFromCart(cart)}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between m-5 py-5 border-t ">
          <button className="w-1/5 underline text-sm " onClick={removeCart}>
            Remove Cart
          </button>
          <div className="text-lg md:text-2xl text-orange-600 font-bold ">
            1000
          </div>
        </div>
      </PageContainer>
    </div>
  );
};

export default CartClient;
