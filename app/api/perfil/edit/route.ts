import { getServerSession } from 'next-auth/next';
import { NextResponse } from 'next/server';

import { authOptions } from '@/lib/auth-options';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);

  if (session && session.user && session.user.email) {
    try {
      const body = await req.json();

      await prisma.user.update({
        where: {
          email: session.user.email
        },
        data: {
          name: body.userName,
          description: body.description,
          function: body.function
        }
      });

      return NextResponse.json(
        {
          message: 'Perfil editado com sucesso'
        },
        { status: 200 }
      );
    } catch (error) {
      return NextResponse.json(
        {
          message: 'Erro ao modificar perfil'
        },
        { status: 400 }
      );
    }
  } else {
    return NextResponse.json(
      {
        message: 'Sessão não encontrada'
      },
      { status: 400 }
    );
  }
}
