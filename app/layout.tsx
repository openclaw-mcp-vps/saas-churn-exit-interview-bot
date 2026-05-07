import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ChurnBot — Automated Exit Interviews for SaaS",
  description: "AI chatbot that conducts exit interviews when users cancel, categorizes feedback, and suggests retention offers. Stop losing customers silently."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="6192ba9d-35c4-4005-89ed-ecc0819e046c"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
