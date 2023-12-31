import { AuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

import { prisma } from './prisma';

export const authOptions: AuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    })
  ],
  callbacks: {
    async session({ session }) {
      return session;
    },
    async signIn({ user }) {
      try {
        if (user && user.id && user.email) {
          const userData = await prisma.user.findUnique({
            where: {
              email: String(user.email)
            }
          });

          if (!userData) {
            await prisma.user.create({
              data: {
                avatarUrl: user.image ? user.image : '',
                email: user.email,
                function: 'Não informado',
                description: 'Não informado',
                name: String(user.name),
                id: user.id
              }
            });
          }
        }
        await prisma.$disconnect();

        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    }
  },
  pages: {
    signIn: '/login'
  }
};
