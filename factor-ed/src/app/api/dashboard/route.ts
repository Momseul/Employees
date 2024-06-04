import { NextRequest, NextResponse } from 'next/server';
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
import { isStaticGenBailoutError } from "next/dist/client/components/static-generation-bailout";
import { isNotFoundError } from "next/dist/client/components/not-found";
import { isRedirectError } from "next/dist/client/components/redirect";
import { isDynamicServerError } from "next/dist/client/components/hooks-server-context";


export  async function GET(
  req: NextRequest,
  res: NextResponse
) {
  const profile = req.nextUrl.searchParams.get('user')

  try {

    console.log(profile)
    const elements = await prisma.employee.findMany({
      where:{
      OR: [
        {
          name: {
            startsWith: profile,
          },
        },
        { email: { startsWith: profile } },
      ],
    },
      include: {skills: true},
   

    });
    console.log(elements)

    return NextResponse.json(elements, {
      status: 200,
    });
  } catch (error) {
    console.log(error)
    if (isDynamicServerError(error)) {
      throw error;
    }
    if (isNotFoundError(error)) {
      throw error;
    }
    if (isRedirectError(error)) {
      throw error;
    }
    if (isStaticGenBailoutError(error)) {
      throw error;
    }
    return NextResponse.json(
      { error: "Failed to get users" },
      {
        status: 500,
      }
    );
  }
}