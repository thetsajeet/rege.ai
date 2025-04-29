import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";

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
    <html lang="en" className="overflow-x-hidden">
      <body className="dark">
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
