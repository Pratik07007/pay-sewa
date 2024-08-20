import { NextRequest, NextResponse } from "next/server";
import { signUpInputs } from "@pay-sewa/zod-types/zod";
import { db } from "@pay-sewa/db/client";
import { hash } from "bcrypt";

export const POST = async (req: NextRequest) => {
  const { name, email, phone, password } = await req.json();
  //zodInput validiation
  const zodResponse = signUpInputs.safeParse({ name, email, phone, password });
  if (zodResponse.success) {
    const hashedPassword = await hash(password, 10);
    try {
      const user = await db.user.create({
        data: {
          name,
          email,
          password: hashedPassword,
          phone,
        },
      });
      return NextResponse.json({
        msg: `User created succesfully as ${user.email}`,
      });
    } catch (error) {
      return NextResponse.json({
        msg: "User Already exist with this email",
      });
    }
  }
  return NextResponse.json({ msg: zodResponse.error?.issues[0]?.message });
};
