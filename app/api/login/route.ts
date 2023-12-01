import { compare, hash } from "bcryptjs";
import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";
import {NextRequest} from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const { username, password }: {username: string, password: string} = await req.json();

    const checkUser = await prismadb.user.findUnique({
      where: { username: username },
    });

    if (!checkUser) {
      return NextResponse.json({
        success: false,
        message: "User name is not present !Please try again",
      });
    }

    const hashPassword = await hash(checkUser.password, 12);
    const checkPassword = await compare(password, hashPassword);

    if (!checkPassword || !checkUser) {
      return NextResponse.json({
        success: false,
        message: "Usuário ou senha incorreto tente novamente!",
      });
    }
    return NextResponse.json({
      success: true,
      message: "Login successfull",
    });
  } catch (e) {
    // console.log('Erro desconhecido',e);

    return NextResponse.json({
      success: false,
      message: "Something goes wrong !Please try again",
    });
  }
}
