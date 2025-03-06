import { payload } from "@/lib/payload";

import { DesktopNavbar } from "./components/desktop-navbar";
import { MobileNavbar } from "./components/mobile-navbar";

export const Navbar = async () => {
  const { docs } = await payload.find({
    collection: "categories",
    depth: 1,
    sort: "createdAt",
    pagination: false,
  });

  return (
    <div className="group">
      <DesktopNavbar categories={docs} />
      <MobileNavbar categories={docs} />
    </div>
  );
};
