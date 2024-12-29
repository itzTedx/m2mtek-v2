export const ExtraFeatures = () => {
  return (
    <section className="bg-gray-900 py-16 text-white">
      <ul className="container grid gap-6 md:grid-cols-3">
        {FEATURES.map((feature, index) => (
          <li
            key={index}
            className="rounded-xl bg-white/10 p-9 first:bg-white/15 last:bg-white/5"
          >
            <h3 className="mb-2 font-aloevera text-2xl font-medium">
              {feature.title}
            </h3>
            <p className="text-lg font-light">{feature.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export const FEATURES = [
  {
    title: "Versatile Models",
    description:
      "Designed to fit a range of screen sizes and mounting needs, making it ideal for homes, offices, and commercial spaces.",
  },
  {
    title: "Premium Materials",
    description:
      "High-grade materials ensure durability, longevity, and maximum load-bearing capacity.",
  },
  {
    title: "Universal Compatibility",
    description:
      "Supports VESA standards for a wide variety of TV models and brands.",
  },
];
