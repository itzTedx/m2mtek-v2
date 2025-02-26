import { Metadata } from "next";
import React from "react";

import BreakpointIndicator from "@/components/tailwind-indicator";
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
      <head>
        <meta name="apple-mobile-web-app-title" content="M2MTEK" />
      </head>
      <body
        className={cn(
          plusJakartaSans.className,
          aloevera.variable,
          "scroll-smooth antialiased"
        )}
      >
        <Navbar />
        {children}
        <BreakpointIndicator />
        {/* <Cta /> */}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
