import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import YandexProvider from 'next-auth/providers/yandex';
import VkProvider from 'next-auth/providers/vk';
import GoogleProvider from 'next-auth/providers/google';
export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    YandexProvider({
      clientId: process.env.YANDEX_ID,
      clientSecret: process.env.YANDEX_SECRET,
    }),
    VkProvider({
      clientId: process.env.VK_CLIENT_ID,
      clientSecret: process.env.VK_CLIENT_SECRET,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
};
export default NextAuth(authOptions);
