import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ReduxProvider } from "@/shared/providers/ReduxProvider";
// import { ensureInitialUser } from "@/lib/initialize";

// ✅ Load DM Sans (modern, balanced sans-serif)
const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Pragati360 - Empower Business Growth",
  description:
    "Join Pragati360 early access - an AI-powered growth intelligence suite for modern businesses.",
};

// ensureInitialUser();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} font-sans antialiased bg-black text-white`}
      >
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
