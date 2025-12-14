"use client";

import { CheckCircle } from "lucide-react";
import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="min-h-[calc(100vh-6rem)] md:min-h-[calc(100vh-15rem)] flex items-center justify-center text-center text-2xl text-red-500">
      <div className="flex flex-col items-center gap-6 p-10 rounded-md bg-fuchsia-50 shadow-lg m-4">
        
        {/* Green Checkmark Icon */}
        <CheckCircle size={80} className="text-green-500" />
        
        <h1 className="text-4xl font-bold text-green-500">Success!</h1>
        <p className="text-xl text-gray-600">Your order has been placed successfully.</p>
        <p className="text-sm text-gray-400">You will receive your delicious pizza in ~30 mins!</p>
        
        <div className="flex flex-col md:flex-row gap-4 mt-4">
           {/* Only "Go Home" Button remains */}
           <Link 
             href="/" 
             className="bg-red-500 text-white px-6 py-3 rounded font-bold hover:bg-red-600 transition shadow-md"
           >
              Go Home
           </Link>
        </div>

      </div>
    </div>
  );
}