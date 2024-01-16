import prisma from "@/libs/prismadb";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";

export async function getSession() {
  return await getServerSession(authOptions);
}

export async function getCurrectUSer() {
  try {
    const session = await getSession();

    if (!session?.user?.email) {
      return null;
    }

    const currentUSer = await prisma.user.findUnique({
      where: {
        email: session?.user.email,
      },
    });

    if (!currentUSer) {
      return null;
    }

    return {
      ...currentUSer,
      createdAt: currentUSer.createdAt.toISOString(),
      updatedAt: currentUSer.updatedAt.toISOString(),
      emailVarified: currentUSer.emailVerified?.toISOString() || null,
    };
  } catch (err: any) {
    console.log("failed to take userSession");
    return null;
  }
}
