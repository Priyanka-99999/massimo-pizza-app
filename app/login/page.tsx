"use client"; // <--- Add this at the very top

import Image from "next/image";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LoginPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  // If already logged in, redirect to Homepage (or Cart)
  useEffect(() => {
    if (status === "authenticated") {
      router.push("/");
    }
  }, [status, router]);

  if (status === "loading") {
    return <p className="p-4">Loading...</p>;
  }

  return (
    <div className="p-4 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex items-center justify-center">
      <div className="h-full shadow-2xl rounded-md flex flex-col md:flex-row md:h-[70%] md:w-full lg:w-[60%] 2xl:w-1/2 bg-white overflow-hidden">
        
        {/* IMAGE CONTAINER */}
        <div className="relative h-1/3 w-full md:h-full md:w-1/2">
          <Image src="/loginBg.png" alt="Login Background" fill className="object-cover" />
        </div>

        {/* FORM CONTAINER */}
        <div className="p-10 flex flex-col gap-8 md:w-1/2 justify-center">
          <h1 className="font-bold text-xl xl:text-3xl">Welcome Back</h1>
          <p className="text-gray-500">Log into your account or create a new one using social buttons.</p>
          
          {/* GOOGLE BUTTON - CLICKABLE */}
          <button 
            className="flex gap-4 p-4 ring-1 ring-orange-100 rounded-md hover:bg-orange-50 transition items-center"
            onClick={() => signIn("google")} // <--- The Magic Line
          >
            <Image src="/google.png" alt="Google" width={20} height={20} className="object-contain" />
            <span className="font-medium">Sign in with Google</span>
          </button>

          {/* Facebook Button (Placeholder) */}
          <button className="flex gap-4 p-4 ring-1 ring-blue-100 rounded-md hover:bg-blue-50 transition items-center">
            <Image src="/facebook.png" alt="Facebook" width={20} height={20} className="object-contain" />
            <span className="font-medium">Sign in with Facebook</span>
          </button>

          <p className="text-sm text-gray-400">
            Have a problem? <Link className="underline text-gray-600" href="/contact">Contact us</Link>
          </p>
        </div>
      </div>
    </div>
  );
}