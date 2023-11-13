import { getServerSession } from 'next-auth/next';
import { NextResponse } from 'next/server';

import { authOptions } from '@/lib/auth-options';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);

  if (session && session.user && session.user.email) {
    try {
      const body = await req.json();

      await prisma.revenues.delete({
        where: {
          id: body.id
        }
      });

      await prisma.$disconnect();
      return NextResponse.json(
        {
          message: 'Post deletado com sucesso'
        },
        { status: 200 }
      );
    } catch (error) {
      return NextResponse.json(
        {
          message: 'Erro ao deletar'
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
