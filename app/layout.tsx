import type { Metadata } from "next";
import "./globals.css";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://spiralcast.vercel.app";

export const metadata: Metadata = {
  title: "Spiral Cast | $SCT Airdrop Registration",
  description: "Register your wallet for the $SCT airdrop. Allocation is scored by your Neynar Score. Direct claim, no vesting.",
  other: {
    "fc:miniapp": JSON.stringify({
      version: "1",
      imageUrl: APP_URL + "/og-image.png",
      button: {
        title: "Register for $SCT",
        action: {
          type: "launch_miniapp",
          url: APP_URL,
          name: "Spiral Cast",
          splashImageUrl: APP_URL + "/splash.png",
          splashBackgroundColor: "#F8F3E8",
        },
      },
    }),
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,400;0,500;0,600;0,700;0,900;1,400;1,500;1,600;1,700;1,900&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body noise-bg min-h-screen">{children}</body>
    </html>
  );
}
