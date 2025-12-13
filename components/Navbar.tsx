"use client";

import Link from "next/link";
import { ShoppingBasket, Phone, User } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useSession, signOut } from "next-auth/react"; // ✅ Import Auth hooks

export default function Navbar() {
  const { totalItems } = useCart();
  const { status } = useSession(); // ✅ Check if user is logged in

  return (
    <nav className="w-full bg-white shadow-sm font-sans sticky top-0 z-50">
      {/* Top Red Bar */}
      <div className="bg-red-500 text-white text-center py-2 text-sm font-medium">
        Free delivery for all orders over $50. Order your food now!
      </div>

      {/* Main Nav Container */}
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Left Links (Hidden on small screens) */}
        <div className="hidden md:flex space-x-6 text-red-500 font-medium">
          <Link href="/" className="hover:text-red-700 transition">HOMEPAGE</Link>
          <Link href="/menu" className="hover:text-red-700 transition">MENU</Link>
          <Link href="/contact" className="hover:text-red-700 transition">CONTACT</Link>
        </div>

        {/* Logo */}
        <div className="text-3xl font-extrabold text-red-500 tracking-wide">
          <Link href="/">MASSIMO</Link>
        </div>

        {/* Right Actions */}
        <div className="flex items-center space-x-4">
          {/* Phone Number (Hidden on mobile) */}
          <div className="hidden md:flex items-center bg-orange-400 text-white px-3 py-1 rounded-md text-sm cursor-pointer">
            <Phone size={16} className="mr-2" />
            <span>123 456 78</span>
          </div>

          {/* ✅ DYNAMIC LOGIN / SIGN OUT BUTTON */}
          {status === "authenticated" ? (
            // If Logged In: Show Sign Out
            <button 
              onClick={() => signOut()} 
              className="text-gray-600 hover:text-red-500 flex items-center uppercase"
            >
              <User size={20} className="md:hidden" />
              <span className="hidden md:block">Sign Out</span>
            </button>
          ) : (
            // If Logged Out: Show Login Link
            <Link href="/login" className="text-gray-600 hover:text-red-500 flex items-center">
               <User size={20} className="md:hidden" />
               <span className="hidden md:block">LOGIN</span>
            </Link>
          )}

          {/* Cart Link with Dynamic Counter */}
          <Link href="/cart" className="text-gray-600 hover:text-red-500 flex items-center group">
             <div className="relative">
               <ShoppingBasket size={24} />
               {totalItems > 0 && (
                 <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                   {totalItems}
                 </span>
               )}
             </div>
             <span className="ml-2 font-medium group-hover:text-red-500">
               CART ({totalItems})
             </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}