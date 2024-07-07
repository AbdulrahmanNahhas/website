import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ny } from "@/lib/utils";
import Navbar from "@/components/layout/navbar";
import SidebarLayout from "@/components/layout/sidebar";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ESP32 Web Server",
  description: "A simple web server running on an ESP32 microcontroller",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ny(inter.className, "dark h-screen overflow-hidden")}>
        <Navbar />
        <SidebarLayout>{children}</SidebarLayout>
        <Toaster />
      </body>
    </html>
  );
}
