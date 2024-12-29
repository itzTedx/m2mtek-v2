import Image from "next/image";

export const AboutUs = () => {
  return (
    <section className="container py-28">
      <div className="grid grid-cols-4">
        <div className="col-span-3">
          <h2 className="font-aloevera text-4xl font-bold text-brand-600">
            Who we are
          </h2>
          <p className="text-balance text-xl leading-loose">
            At M2MTEK, we craft ultra-slim TV wall mounts designed to transform
            how you enjoy entertainment. Our products effortlessly integrate
            large-screen TVs into modern homes, offices, and commercial spaces,
            combining precision, innovation, and style.
          </p>
        </div>
        <div className="overflow-hidden rounded-md">
          <Image src="/images/about-img.jpg" height={165} width={328} alt="" />
        </div>
      </div>

      <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {ABOUT_FEATURES.map((feature, index) => (
          <li key={index}>
            <h3 className="font-aloevera font-medium">{feature.title}</h3>
            <p>{feature.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

const ABOUT_FEATURES = [
  {
    title: "Seamless Integration",
    description:
      "Perfectly designed for modern aesthetics to complement any space.",
  },
  {
    title: "Unmatched Safety",
    description:
      "Equipped with side locks and durable materials for enhanced security.",
  },
  {
    title: "Effortless Installation",
    description:
      "Features like integrated bubble levels ensure perfect alignment every time.",
  },
  {
    title: "Sleek Design",
    description: "Minimalist construction for a clean, clutter-free look.",
  },
];
