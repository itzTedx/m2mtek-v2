import { cn } from "@/lib/utils";

export const WhyUsSection = () => {
  return (
    <section className="bg-accent-950 text-white">
      <div className="container grid gap-6 py-12 md:grid-cols-2 md:py-28">
        <div className="">
          <p className="pb-3 text-accent-600">Why Choose M2Mtek?</p>
          <h2 className="font-aloevera text-5xl font-medium md:text-8xl">
            Core Values
            <br />
            That Drive{" "}
            <span className="flex items-center text-orange-600 md:gap-4">
              Innovation{" "}
              <svg
                width="58"
                height="58"
                viewBox="0 0 58 58"
                fill="none"
                className="max-md:scale-50"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.0688 2.17265C27.6001 0.199284 30.3999 0.199288 30.9312 2.17265L35.9131 20.6756C36.0984 21.3639 36.6361 21.9016 37.3244 22.0869L55.8274 27.0688C57.8007 27.6001 57.8007 30.3999 55.8274 30.9312L37.3244 35.9131C36.6361 36.0984 36.0984 36.6361 35.9131 37.3244L30.9312 55.8274C30.3999 57.8007 27.6001 57.8007 27.0688 55.8274L22.0869 37.3244C21.9016 36.6361 21.3639 36.0984 20.6756 35.9131L2.17265 30.9312C0.199284 30.3999 0.199288 27.6001 2.17265 27.0688L20.6756 22.0869C21.3639 21.9016 21.9016 21.3639 22.0869 20.6756L27.0688 2.17265Z"
                  fill="currentColor"
                />
              </svg>
            </span>
          </h2>
        </div>
        <ul className="space-y-8">
          {CORE_VALUES.map((value, index) => (
            <li
              key={index}
              className={cn(
                "flex gap-6 rounded-xl p-10",
                index === 0 && "bg-white/15",
                index === 1 && "bg-white/[.07]",
                index === 2 && "bg-white/[.03]"
              )}
            >
              <span
                className={cn(
                  "font-aloevera text-2xl text-white",
                  "flex size-12 shrink-0 items-center justify-center rounded-full",
                  index === 0 ? "bg-orange-600" : "bg-white/20"
                )}
              >
                {index + 1}
              </span>
              <div className="space-y-4">
                <h3 className="text-2xl">{value.title}</h3>
                <p className="text-lg leading-relaxed text-accent-200">
                  {value.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="pb-44"></div>
    </section>
  );
};

const CORE_VALUES = [
  {
    title: "Innovation at the Core",
    description:
      "Our Research & Development team is dedicated to creating groundbreaking products tailored to modern needs.",
  },
  {
    title: "Uncompromising Quality",
    description:
      "We uphold the highest standards in design, manufacturing, and service to ensure reliability and satisfaction.",
  },
  {
    title: "Customer-First Approach",
    description:
      "From personalized solutions to exceptional support, we prioritize your success and comfort.",
  },
];
