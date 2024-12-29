import Image from "next/image";

export const UseCases = () => {
  return (
    <section className="bg-white py-14">
      <div className="container">
        <h3 className="mb-3 font-aloevera text-5xl font-bold">
          <span className="text-orange-600">Perfect</span> for Every Space
        </h3>
        <div className="grid gap-4 md:grid-cols-12">
          <div className="relative col-span-6 flex h-96 items-end overflow-hidden rounded-md">
            <p className="relative z-10 w-full bg-white/10 p-6 font-semibold text-white backdrop-blur-lg">
              Living Rooms: Achieve a clean and elegant setup that enhances your
              entertainment experience.
            </p>
            <Image
              src="/images/living-room.jpg"
              fill
              alt=""
              className="object-cover"
            />
          </div>
          <div className="relative col-span-6 flex h-96 items-end overflow-hidden rounded-md">
            <p className="relative z-10 w-full bg-white/10 p-6 font-semibold text-white backdrop-blur-lg">
              Offices & Boardrooms: Modern solutions for presentations and
              collaborative workspaces.
            </p>
            <Image
              src="/images/office.jpg"
              fill
              alt=""
              className="object-cover"
            />
          </div>
          <div className="relative col-span-5 flex h-96 items-end overflow-hidden rounded-md">
            <p className="relative z-10 w-full bg-white/10 p-6 font-semibold text-white backdrop-blur-lg">
              Retail & Commercial Spaces: Showcase digital signage and
              advertising with a sleek, professional finish.
            </p>
            <Image
              src="/images/commercial.jpg"
              fill
              alt=""
              className="object-cover"
            />
          </div>
          <div className="relative col-span-7 flex h-96 items-end overflow-hidden rounded-md">
            <p className="relative z-10 w-full bg-white/10 p-6 font-semibold text-white backdrop-blur-lg">
              Home Theaters: Elevate your viewing with precision-mounted large
              screens.
            </p>
            <Image
              src="/images/home-theater.jpg"
              fill
              alt=""
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
