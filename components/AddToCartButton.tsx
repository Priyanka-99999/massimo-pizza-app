"use client";

import { useCart } from "@/context/CartContext";

export default function AddToCartButton({ product }: { product: any }) {
  const { addToCart } = useCart();

  const handleCart = () => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      img: product.img,
      quantity: 1,
    });
    // Optional: Show a browser alert or toast
    alert("Product added to cart!");
  };

  return (
    <button
      onClick={handleCart}
      className="bg-red-500 text-white p-3 rounded-md ring-1 ring-red-500 hover:bg-white hover:text-red-500 transition w-max"
    >
      Add to Cart
    </button>
  );
}