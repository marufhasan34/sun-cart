import { Button } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

const ProductDetailsPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch("https://sun-cart-lac.vercel.app/data.json");
  const products = await res.json();
  const product = products.find((p) => p.id == id);

  return (
    <div className="card   card-body shadow-2xl">
      <div className="flex gap-15">
        <div>
          <Image
            className="rounded-2xl"
            src={product.image}
            alt={product.name}
            width={300}
            height={300}
          />
        </div>
        <div className="flex-1 mt-9">
          <h2 className="font-bold text-3xl">{product.name}</h2>
          <p className="text-gray-400 my-3">
            <span className="font-semibold text-black">Description :</span>{" "}
            {product.description}
          </p>
          <div className="flex gap-10 items-center">
            <h4 className="font-semibold text-lg">
              Brand of :{" "}
              <span className="font-bold text-xl text-mauve-900">
                {product.brand}
              </span>
            </h4>
            <p className="text-lg font-semibold">
              Category : {product.category}
            </p>
          </div>
          <p className="font-semibold my-3 flex items-center gap-2 text-lg">
            Rating :{" "}
            <span className="font-bold flex items-center gap-2 text-xl text-mauve-900">
              <FaStar className="text-amber-500" />
              {product.rating}
            </span>{" "}
            out of{" "}
            <span className="font-bold flex items-center gap-2 text-xl text-mauve-900">
              <FaStar className="text-amber-500" /> 5.00
            </span>
          </p>
          <p className="font-semibold">In Stock : {product.stock}</p>
          <p className="font-bold my-2">Price : $ {product.price}</p>

          <div className="flex gap-4 items-center" >
            <p className="font-semibold ">Order Now :</p>
            <Button variant="outline">{product.name}</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
