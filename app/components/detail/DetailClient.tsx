"use client";

import useCart from "@/hooks/useCart";
import { Rating } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import PageContainer from "../conatiners/PageContainer";
import Button from "../general/Button";
import { Counter } from "../general/Counter";
import Heading from "../general/Heading";
import Comment from "./Comment";

export type CardProductProps = {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  image: string;
  inStock: boolean;
};

const DetailClient = ({ product }: { product: any }) => {
  const { productCartQty } = useCart();

  const [cardProduct, setCardProduct] = useState<CardProductProps>({
    id: product.id,
    name: product.name,
    description: product.description,
    price: product.price,
    quantity: 1,
    image: product.image,
    inStock: product.inStock,
  });

  console.log(productCartQty, "productCartQty");

  const increaseFunc = () => {
    if (cardProduct.quantity == 10) return;
    setCardProduct((prev) => ({ ...prev, quantity: prev.quantity + 1 }));
  };

  const decreaseFunc = () => {
    if (cardProduct.quantity == 1) return;
    setCardProduct((prev) => ({ ...prev, quantity: prev.quantity - 1 }));
  };

  let productRating =
    product?.reviews?.reduce((acc: number, item: any) => acc + item.rating, 0) /
    product?.reviews?.length;

  return (
    <div className="my-10">
      <PageContainer>
        <div className="block  md:flex gap-10 justify-center">
          <div className="relative h-[200px] md:h-[400px]  w-[200px] md:w-[400px] mb-3 md:mb-0 ">
            <Image src={product.image} fill alt="" />
          </div>
          <div className="w-full md:w-1/2">
            <div className="text-xl md:text-2xl">{product?.name}</div>
            <Rating name="read-only" value={productRating} readOnly />
            <div className="text-slate-500">{product?.description} </div>

            <div className="flex items-center gap-2">
              <div> STOCK STATUS</div>
              {product.inStock ? (
                <div className="text-green-500">In stock</div>
              ) : (
                <div className="text-red-500">out of stok</div>
              )}
            </div>
            <Counter
              increaseFunc={increaseFunc}
              decreaseFunc={decreaseFunc}
              cardProduct={cardProduct}
            />
            <div className="text-lg md:xl text-orange-600 font-bold">
              {product.price} €
            </div>
            <Button text="Add to Cart" small onClick={() => {}} />
          </div>
        </div>
        <Heading text="Comments" center={false} />
        <div>
          {product?.reviews?.map((prd: any) => (
            <Comment key={prd.id} prd={prd} />
          ))}
        </div>
      </PageContainer>
    </div>
  );
};

export default DetailClient;
