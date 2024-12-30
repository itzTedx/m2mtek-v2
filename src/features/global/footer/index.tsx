import Link from "next/link";

import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTiktok,
  IconBrandX,
  IconBrandYoutube,
} from "@tabler/icons-react";

import { Logo } from "@/components/assets/logo";
import { getCachedGlobal } from "@/lib/get-globals";
import type { Footer } from "@/payload-types";

export async function Footer() {
  const footerData: Footer = await getCachedGlobal("footer", 1)();

  const navItems = footerData?.navItems || [];

  return (
    <footer className="mt-auto bg-black text-white">
      <div className="container grid max-w-6xl grid-cols-2 gap-8 py-16">
        <div className="">
          <Link className="flex items-center" href="/">
            <Logo className="!fill-white !text-white" />
          </Link>
          <p className="py-3 font-light leading-relaxed">
            {footerData.description}
          </p>
          <nav className="flex flex-col gap-4 pt-5 md:flex-row">
            {navItems.map(({ Label }, i) => (
              <div key={i}>{Label}</div>
            ))}
          </nav>
        </div>

        <div>
          <h6 className="pb-3 text-lg font-medium">Contact us</h6>
          <ul className="space-y-3">
            <li>
              Email:{" "}
              <Link href={`mailto:${footerData.email}`}>
                {footerData.email}
              </Link>
            </li>
            <li>
              Phone:{" "}
              <Link href={`tel:${footerData.phone}`}>{footerData.phone}</Link>
            </li>
            <li>Address: {footerData.address}</li>
          </ul>
          <div className="mt-3 flex gap-4">
            {footerData.facebook && (
              <Link href={footerData.facebook}>
                <IconBrandFacebook stroke={1.5} size={32} />
              </Link>
            )}
            {footerData.instagram && (
              <Link href={footerData.instagram}>
                <IconBrandInstagram stroke={1.5} size={32} />
              </Link>
            )}
            {footerData.linkedin && (
              <Link href={footerData.linkedin}>
                <IconBrandLinkedin stroke={1.5} size={32} />
              </Link>
            )}
            {footerData.x && (
              <Link href={footerData.x}>
                <IconBrandX stroke={1.5} size={32} />
              </Link>
            )}
            {footerData.youtube && (
              <Link href={footerData.youtube}>
                <IconBrandYoutube stroke={1.5} size={32} />
              </Link>
            )}
            {footerData.tiktok && (
              <Link href={footerData.tiktok}>
                <IconBrandTiktok stroke={1.5} size={32} />
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className="container max-w-6xl border-t border-white/25 py-3">
        &copy; {new Date().getFullYear()} M2M Tek. All rights reserved.
      </div>
    </footer>
  );
}
