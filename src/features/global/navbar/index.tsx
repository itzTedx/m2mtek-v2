import { getCachedGlobal } from "@/lib/get-globals";
import { Navbar as NavbarType } from "@/payload-types";

import { DesktopNavbar } from "./components/desktop-navbar";
import { MobileNavbar } from "./components/mobile-navbar";

export const Navbar = async () => {
  const navData: NavbarType = await getCachedGlobal("navbar", 1)();

  return (
    <>
      <DesktopNavbar navData={navData} />
      <MobileNavbar navData={navData} />
    </>
  );
};
