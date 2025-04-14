import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rege.ai | Build the perfect resume with AI",
  description: "ai based resume tool builder",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`dark max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 h-full flex flex-col antialiased`} 
      >
        {children}
      </body>
    </html>
  );
}
