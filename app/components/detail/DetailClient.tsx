"use client";

import Image from "next/image";
import PageContainer from "../conatiners/PageContainer";

const DetailClient = ({ product }: { product: any }) => {
  return (
    <div className="my-10">
      <PageContainer>
        <div className="block  md:flex gap-10 justify-center">
          <div className="relative h-[400px] w-[400px]  ">
            <Image src={product.image} fill alt="" />
          </div>
          <div className="w-1/2">
            <div className="text-xl md:text-2xl">{product?.name}</div>
            <div className="text-slate-500">{product?.description} </div>
          </div>
          <div className="flex items-center gap-2">
            <div> STOCK STATUS</div>
            {product.inStock ? (
              <div className="text-green-500">In stock</div>
            ) : (
              <div className="text-red-500">out of stok</div>
            )}
          </div>
        </div>
      </PageContainer>
    </div>
  );
};

export default DetailClient;
