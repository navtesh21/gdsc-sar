import Image from "next/image";
import prisma from "@/prisma";
import { auth } from "@/auth";

export default async function Home() {
  const user = await auth();
  console.log(user);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {user?.user?.email}
    </div>
  );
}
