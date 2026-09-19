import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "From Pixels to Worlds — Milestone 1",
  description: "A visual, intuition-first journey from one frozen image to the learned representations an image-to-video system needs before generation begins.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
