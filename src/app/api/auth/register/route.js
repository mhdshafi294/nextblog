import { NextResponse } from "next/server";

export const POST = async (request) => {
  const { name, email, password } = await request.json();

  await connect();

  try {
  } catch (error) {
    return new NextResponse(err.message, {
      status: 500,
    });
  }
};
