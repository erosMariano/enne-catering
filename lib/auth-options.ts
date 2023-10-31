import { AuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
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
                function: '',
                name: String(user.name),
                id: user.id
              }
            });
          }
        }
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
