import Link from "next/link";

export default function Footer() {
  return (
    <div className="h-12 md:h-24 p-4 lg:p-20 xl:p-40 text-red-500 flex items-center justify-between border-t-2 border-red-500 bg-white mt-auto">
      <Link href="/" className="font-bold text-xl">MASSIMO</Link>
      <p>© ALL RIGHTS RESERVED.</p>
    </div>
  );
}