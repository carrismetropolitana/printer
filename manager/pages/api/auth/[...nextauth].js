/* * */

import NextAuth from 'next-auth';
import EmailProvider from 'next-auth/providers/email';
import { MongoDBAdapter } from '@auth/mongodb-adapter';
import clientPromise from '@/services/mongodb-adapter';
import QUEUEDB from '@/services/QUEUEDB';

/* * */

export const authOptions = {
  debug: false,
  adapter: MongoDBAdapter(clientPromise),
  session: { strategy: 'jwt' },
  providers: [
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
  ],
  pages: {
    signIn: '/login',
    verifyRequest: '/login/verify',
    signOut: '/login/signout',
    error: '/login/error',
  },
  callbacks: {
    async signIn({ user }) {
      try {
        await QUEUEDB.connect();
        const foundUser = await QUEUEDB.User.findOne({ email: user.email });
        if (!foundUser) return false;
        else return true;
      } catch (err) {
        console.log(err);
        return false;
      }
    },
    async jwt({ token, user }) {
      if (user) token.user = user;
      return token;
    },
    async session({ session, token }) {
      try {
        if (token.user) {
          await QUEUEDB.connect();
          const foundUser = await QUEUEDB.User.findOneAndUpdate({ _id: token.user.id }, { last_active: new Date() }, { new: true });
          if (foundUser) session.user = foundUser;
          return session;
        }
      } catch (err) {
        console.log(err);
        return false;
      }
    },
  },
};

/* * */

export default NextAuth(authOptions);
