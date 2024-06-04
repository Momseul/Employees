import { NextApiRequest, NextApiResponse } from 'next';
//import { signIn } from '@/auth'
import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import { equal } from 'assert';
import { Mail } from '@mui/icons-material';
const prisma = new PrismaClient();





export async function POST(
  req: NextRequest,
  res: NextResponse
) {
  try {
    const data = await req.json();
    const email = data.email as string
    const password = data.password
    //await signIn('credentials', { email, password })

    const result = await prisma.employee.findFirst({

        where: {
          email: email,
          password: password,
        },
        include: {skills: true},

    });



    console.log(data.password)
    console.log(result)

    if(result){
    return Response.json(result, {
      status: 200,
    });}
    else{
      return Response.json(result, {
        status: 400,
      })
    }


  } catch (error) {
    return Response.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}