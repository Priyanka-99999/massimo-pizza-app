import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-[calc(100vh-6rem)] bg-fuchsia-50">
      {/* TEXT CONTAINER */}
      <div className="flex flex-col items-center justify-center gap-8 p-4 md:p-10 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold uppercase text-red-500 leading-tight">
          We deliver <br /> your order <br /> wherever you <br /> are in NY
        </h1>
        <p className="text-gray-500 font-medium text-lg">
          Fresh, hot, and delicious food delivered straight to your doorstep.
        </p>
        <Link href="/menu">
           <button className="bg-red-500 text-white py-4 px-8 rounded-md font-bold hover:bg-red-600 transition">
             Order Now
           </button>
        </Link>
      </div>

      {/* IMAGE CONTAINER */}
      <div className="relative w-full h-full min-h-[400px]">
        {/* Using one of the slides you have in your public folder */}
        <Image 
          src="/slide1.png" 
          alt="Food Delivery" 
          fill 
          className="object-cover" 
        />
      </div>
    </div>
  );
}