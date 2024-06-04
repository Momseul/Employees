import { NextRequest, NextResponse } from 'next/server';
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


export  async function GET(
  req: NextRequest,
  res: NextResponse
) {
  try {

    const profile = req.nextUrl.searchParams.get('user')
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
    return NextResponse.json(
      { error: "Failed to get users" },
      {
        status: 500,
      }
    );
  }
}