// import Hero from "@/components/Hero";
// import Featured from "@/components/Featured";
// import LogoutButton from "@/components/LogoutButton"; 
// import { auth } from "@/auth"; 

// export default async function Home() {
//   // 1. Fetch the user session
//   const session = await auth();

//   return (
//     <main className="p-10">
//       {/* 2. Authentication Section (Only shows if logged in) */}
//       {session && (
//         <div className="flex justify-between items-center mb-8 border-b pb-4">
//           <h1 className="text-2xl font-bold">
//             Welcome, {session.user?.name}
//           </h1>
//           <LogoutButton />
//         </div>
//       )}

//       {/* 3. Your Original Content */}
//       <Hero />
//       <Featured />
//     </main>
//   );
//
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Featured />
    </main>
  );
}