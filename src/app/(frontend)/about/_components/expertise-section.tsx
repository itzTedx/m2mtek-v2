export const ExpertiseSection = () => {
  return (
    <section className="container grid grid-cols-2 gap-6">
      <ul className="-mt-40 space-y-12 px-9">
        {EXPERTISE_ITEMS.map((item, index) => (
          <li key={index} className="space-y-2 rounded-xl bg-brand p-10">
            <h4 className="font-aloevera text-3xl font-bold text-white">
              {item.title}
            </h4>
            <p className="text-xl text-brand-100">{item.description}</p>
          </li>
        ))}
      </ul>

      <div>
        <p>Our Expertise</p>
        <h3>
          Solutions <br />
          for Every
          <span>
            Environment{" "}
            <svg
              width="58"
              height="58"
              viewBox="0 0 58 58"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27.0688 2.17265C27.6001 0.199284 30.3999 0.199288 30.9312 2.17265L35.9131 20.6756C36.0984 21.3639 36.6361 21.9016 37.3244 22.0869L55.8274 27.0688C57.8007 27.6001 57.8007 30.3999 55.8274 30.9312L37.3244 35.9131C36.6361 36.0984 36.0984 36.6361 35.9131 37.3244L30.9312 55.8274C30.3999 57.8007 27.6001 57.8007 27.0688 55.8274L22.0869 37.3244C21.9016 36.6361 21.3639 36.0984 20.6756 35.9131L2.17265 30.9312C0.199284 30.3999 0.199288 27.6001 2.17265 27.0688L20.6756 22.0869C21.3639 21.9016 21.9016 21.3639 22.0869 20.6756L27.0688 2.17265Z"
                fill="currentColor"
              />
            </svg>
          </span>
        </h3>
        <p>
          Explore innovative products that transform spaces. From ergonomic
          workstations to advanced mounting solutions and healthcare
          innovations, M2Mtek offers smart, reliable, and stylish solutions for
          your needs.
        </p>
      </div>
    </section>
  );
};

const EXPERTISE_ITEMS = [
  {
    title: "Ergonomic Workspaces",
    description:
      "Smart desks, height-adjustable workstations, and accessories designed for comfort and productivity.",
  },
  {
    title: "Advanced Mounting Solutions",
    description:
      "Motorized TV lifts, heavy-duty monitor arms, and compact mounting systems for diverse applications.",
  },
  {
    title: "Healthcare Innovations",
    description:
      "Medical carts and CPU holders designed to improve efficiency and patient care.",
  },
];
