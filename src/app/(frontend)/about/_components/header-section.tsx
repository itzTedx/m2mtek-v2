export const HeaderSection = () => {
  return (
    <section className="container grid gap-6 pb-16 md:grid-cols-3">
      {HEADER_SECTION.map((section, index) => (
        <div
          key={index}
          className="space-y-3 rounded-md border border-gray-100 bg-white p-7"
        >
          <h2 className="font-aloevera text-2xl font-medium">
            {section.title}
          </h2>
          <p className="text-balance text-lg leading-relaxed">{section.item}</p>
        </div>
      ))}
    </section>
  );
};

const HEADER_SECTION = [
  {
    title: "Our Vision",
    item: "To shape the future by creating smarter, more ergonomic environments that enhance productivity, comfort, and sustainability.",
  },
  {
    title: "Our Mission",
    item: "We strive to design and deliver intelligent solutions that redefine efficiency and elevate everyday experiences for homes, offices, and industries.",
  },
  {
    title: "Our Journey",
    item: "M2Mtek has grown from humble beginnings to a global leader, driving innovation with a focus on quality, creativity, and customer satisfaction.",
  },
];
