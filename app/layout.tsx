import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "From Pixels to Worlds — Day 01",
  description: "What a still image gives us, what it leaves unknown, and why image-to-video generation must invent a coherent future.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
