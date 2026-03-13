import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "ExportAcademy — From Paycheck to Owner",
    template: "%s | ExportAcademy",
  },
  description:
    "Low-cost path from paycheck to ownership. Learn to source from China, place your first order, and build a real business — with 1:1 guidance.",
  openGraph: {
    type: "website",
    siteName: "ExportAcademy",
    title: "ExportAcademy — From Paycheck to Owner",
    description:
      "Low-cost path from paycheck to ownership. Learn to source from China, place your first order, and build a real business — with 1:1 guidance.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
