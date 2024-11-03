import type { Metadata } from "next";
import "./globals.css";
import Rtl from "@/libraries/Rtl";
import Header from "@/components/Header/Header";
import AuthProvider from "@/Context/AuthContext";

export const metadata: Metadata = {
  title: "Flight",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Rtl>
      <AuthProvider>
        <html lang="en" dir="rtl">
          <body className="bg-[black]">
            <Header />
            {children}
          </body>
        </html>
      </AuthProvider>
    </Rtl>
  );
}
