import NextAuth from "next-auth";
import { authOptions } from "@/auth"; // Import the settings from above

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };