"use client";

import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react"; // Import Plus icon if you want, or just use text
import { useSession } from "next-auth/react"; 
import { useRouter } from "next/navigation"; 

export default function CartPage() {
  // ✅ 1. Add 'addToCart' to the list of tools we get from the cart
  const { cartItems, removeFromCart, totalPrice, addToCart } = useCart();
  const { data: session } = useSession(); 
  const router = useRouter(); 

  const handleCheckout = () => {
    if (!session) {
      router.push("/login");
    } else {
      router.push("/success");
    }
  };

  return (
    <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-red-500 lg:flex-row bg-white">
      
      {/* ---------------- LEFT SIDE: PRODUCTS LIST ---------------- */}
      <div className="h-1/2 p-4 flex flex-col justify-center overflow-y-scroll lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-20 xl:px-40 scrollbar-hide">
        
        {/* EMPTY CART STATE */}
        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full gap-4">
            <div className="relative w-40 h-40">
              <Image src="/temporary/p1.png" alt="Empty Cart" fill className="object-contain opacity-50 grayscale" />
            </div>
            <h2 className="text-2xl font-bold text-gray-400">Your cart is empty</h2>
            <Link 
              href="/menu" 
              className="bg-red-500 text-white py-3 px-6 rounded-md font-bold hover:bg-red-600 transition"
            >
              BROWSE MENU
            </Link>
          </div>
        ) : (
          /* FILLED CART STATE */
          <div className="flex flex-col gap-6 h-full mt-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between shadow-md p-4 bg-white rounded-lg border border-red-100">
                
                {/* Product Image */}
                <div className="relative w-20 h-20">
                  {item.img && (
                    <Image src={item.img} alt={item.title} fill className="object-contain" />
                  )}
                </div>

                {/* Product Info with NEW PLUS BUTTON */}
                <div className="flex-1 px-4">
                  <h1 className="uppercase text-lg font-bold text-red-500">{item.title}</h1>
                  
                  {/* ✅ 2. Updated Quantity Section */}
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-sm text-gray-500">Large</span>
                    <span className="text-sm font-bold text-gray-700">x {item.quantity}</span>
                    
                    {/* ✅ The "+" Button */}
                    <button 
                      className="w-6 h-6 flex items-center justify-center border border-red-500 text-red-500 rounded-full hover:bg-red-500 hover:text-white transition font-bold text-lg leading-none pb-1"
                      onClick={() => addToCart(item)}
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Price */}
                <h2 className="font-bold text-lg text-gray-700 mr-4">
                  ${(item.price * item.quantity).toFixed(2)}
                </h2>

                {/* Remove Button */}
                <button 
                  className="bg-red-100 p-2 rounded-full hover:bg-red-200 transition text-red-500" 
                  onClick={() => removeFromCart(item.id)}
                >
                  <X size={20} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ---------------- RIGHT SIDE: PAYMENT SUMMARY ---------------- */}
      <div className="h-1/2 p-4 bg-fuchsia-50 flex flex-col gap-6 justify-center lg:h-full lg:w-1/3 2xl:w-1/2 lg:px-20 xl:px-40 shadow-inner">
        <h2 className="text-2xl font-bold uppercase text-red-500 hidden lg:block">Order Summary</h2>
        
        <div className="flex flex-col gap-2">
          <div className="flex justify-between text-gray-600">
            <span className="">Subtotal ({cartItems.length} items)</span>
            {/* The Price updates automatically because totalPrice comes from the context */}
            <span className="">${totalPrice.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span className="">Service Cost</span>
            <span className="">$0.00</span>
          </div>
          <div className="flex justify-between text-green-500 font-medium">
            <span className="">Delivery Cost</span>
            <span className="">FREE</span>
          </div>
        </div>

        <hr className="border-red-200" />
        
        <div className="flex justify-between items-center my-2">
          <span className="font-bold text-xl uppercase text-red-500">TOTAL</span>
          <span className="font-bold text-2xl text-black">${totalPrice.toFixed(2)}</span>
        </div>

        <button 
          className="bg-red-500 text-white p-4 rounded-md w-full uppercase font-bold hover:bg-red-600 transition shadow-lg disabled:bg-gray-300 disabled:cursor-not-allowed"
          disabled={cartItems.length === 0}
          onClick={handleCheckout} 
        >
          {session ? "CHECKOUT" : "LOGIN TO CHECKOUT"}
        </button>
      </div>
    </div>
  );
}