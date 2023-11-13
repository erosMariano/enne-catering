import { getServerSession } from 'next-auth';
import { signOut } from 'next-auth/react';
import { redirect } from 'next/navigation';
import React from 'react';

import EditContent from '@/components/perfil/edit/edit-content';

import { authOptions } from '@/lib/auth-options';
import { prisma } from '@/lib/prisma';

export default async function EditDetails() {
  const session = await getServerSession(authOptions);
  if (!session || !session.user || !session.user.email) {
    signOut();
    redirect('/login');
  }

  const userData = await prisma.user.findUnique({
    where: {
      email: session.user?.email
    }
  });
  await prisma.$disconnect();

  return (
    <EditContent
      description={userData?.description}
      functionUser={userData?.function}
      name={userData?.name}
    />
  );
}
