"use client";

import { useCart } from "@/context/CartContext";
import { useSession } from "next-auth/react"; 
import { useRouter } from "next/navigation"; 
import { useState } from "react"; // ✅ Import State for the counter

export default function AddToCartButton({ product }: { product: any }) {
  const { addToCart } = useCart();
  const { data: session } = useSession(); 
  const router = useRouter(); 
  const [quantity, setQuantity] = useState(1); // ✅ Default quantity is 1

  // Function to decrease quantity (min 1)
  const handleDecrease = (e: React.MouseEvent) => {
    e.stopPropagation(); // Stop clicking the parent container
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  // Function to increase quantity
  const handleIncrease = (e: React.MouseEvent) => {
    e.stopPropagation();
    setQuantity((prev) => prev + 1);
  };

  const handleCart = () => {
    // 1. Login Check
    if (!session) {
      router.push("/login");
      return;
    }

    // 2. Add with the selected quantity
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      img: product.img,
      quantity: quantity, // ✅ Uses the number you selected
    });
    
    // Optional: Reset counter back to 1 after adding
    setQuantity(1);
  };

  return (
    <div className="flex flex-col gap-2">
      {/* The Quantity Selector & Add Button Group */}
      <div className="flex items-center gap-4">
        
        {/* Quantity Controls */}
        <div className="flex items-center border border-red-500 rounded-md px-2 py-1 gap-3 text-red-500 font-bold">
          <button onClick={handleDecrease} className="hover:text-red-700">-</button>
          <span>{quantity}</span>
          <button onClick={handleIncrease} className="hover:text-red-700">+</button>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleCart}
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition shadow-md"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}