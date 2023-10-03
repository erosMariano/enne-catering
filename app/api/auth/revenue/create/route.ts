import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';

import { authOptions } from '../../[...nextauth]/route';

export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ message: 'É necessário estar logado' });
  }

  return NextResponse.json({
    name: session.user?.name
  });
}
