// pages/api/auth/[...nextauth].js
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          scope: 'https://www.googleapis.com/auth/webmasters.readonly https://www.googleapis.com/auth/analytics.readonly',
          prompt: "consent", // Это заставит пользователя подтвердить доступ даже если он уже предоставлен
        },
      },
    }),
  ],
  secret: 'sdfsdfsdfsdfsdf',
}
