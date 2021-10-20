import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  providers: [
    Providers.GitHub({
      clientId: "eba570b5bb734fd6c379",
      clientSecret: "1f3c8081c3bfce8986876cce267b2b9db037fb82",
      scope: "read:user",
    }),
    Providers.Google({
      clientId:
        "649087232945-cu1d0cc4l4qf71f6p2tl8abekverr68p.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
});
