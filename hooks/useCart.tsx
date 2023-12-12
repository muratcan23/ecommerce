"use client";

import { CardProductProps } from "@/app/components/detail/DetailClient";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import toast from "react-hot-toast";

interface CartContextProps {
  productCartQty: number;
  cartPrdcts: CardProductProps[] | null;
  addToBasket: (product: CardProductProps) => void;
  removeFromCart: (product: CardProductProps) => void;
}
const CartContext = createContext<CartContextProps | null>(null);

interface Props {
  [PropName: string]: any;
}

export const CartContextProvider = (props: Props) => {
  const [productCartQty, setProductCartQty] = useState(0);
  const [cartPrdcts, setCartPrdcts] = useState<CardProductProps[] | null>(null);

  useEffect(() => {
    let getItem: any = localStorage.getItem("cart");
    let getItemPArse: CardProductProps[] | null = JSON.parse(getItem);
    setCartPrdcts(getItemPArse);
  }, []);

  const addToBasket = useCallback(
    (product: CardProductProps) => {
      setCartPrdcts((prev) => {
        let updatedCart;
        if (prev) {
          updatedCart = [...prev, product];
        } else {
          updatedCart = [product];
        }
        toast.success("Product added to cart...");
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return updatedCart;
      });
    },
    [cartPrdcts]
  );

  const removeFromCart = useCallback((product: CardProductProps) => {}, []);

  let value = {
    productCartQty,
    addToBasket,
    cartPrdcts,
  };

  return <CartContext.Provider value={value} {...props} />;
};

const useCart = () => {
  const context = useContext(CartContext);

  if (context === null) {
    throw new Error("An error occurred!");
  }
  return context;
};

export default useCart;
