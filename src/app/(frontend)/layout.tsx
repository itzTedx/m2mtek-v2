import { Metadata } from "next";
import React from "react";


import { Cta } from "@/features/global/cta/cta";
import { Footer } from "@/features/global/footer";
import { Navbar } from "@/features/global/navbar";
import { aloevera, plusJakartaSans } from "@/fonts";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "M2Mtek",
  description:
    "Discover global career opportunities with Aramis Work. From job applications to work permit processing, we provide end-to-end support for job seekers and employers. Explore diverse roles, track your applications, and take your career to new heights.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          plusJakartaSans.className,
          aloevera.variable,
          "antialiased"
        )}
      >
        <Navbar />
        {children}
        <Cta />
        <Footer />
      </body>
    </html>
  );
}
