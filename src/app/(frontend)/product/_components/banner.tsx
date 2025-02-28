import Image from "next/image";

export const Banner = () => {
  return (
    <header className="relative flex h-[40rem] items-end p-28">
      <div className="relative z-10 max-w-lg bg-white/30 p-6 backdrop-blur-xl">
        <h1 className="font-aloevera text-2xl font-semibold">Our Products</h1>
        <p className="font-medium">
          Discover M2Mtek&apos;s innovative products, combining technology,
          ergonomic design, and quality to enhance workspaces, healthcare, and
          living environments.
        </p>
      </div>
      <Image
        src="/images/product-img.jpg"
        fill
        alt=""
        className="object-cover"
      />
    </header>
  );
};
