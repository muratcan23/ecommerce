"use client";

import { createContext, useContext, useState } from "react";

interface CartContextProps {
  productCartQty: number;
}
const CartContext = createContext<CartContextProps | null>(null);

interface Props {
  [PropName: string]: any;
}

export const CartContextProvider = (props: Props) => {
  const [productCartQty, setProductCartQty] = useState(0);

  let value = {
    productCartQty,
  };

  return;
  <CartContext.Provider value={value} {...props} />;
};

const useCart = () => {
  const context = useContext(CartContext);

  if (context == null) {
    throw new Error("an error accoured!");
  }
  return context;
};

export default useCart;
