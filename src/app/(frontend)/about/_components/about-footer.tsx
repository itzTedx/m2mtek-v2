import Image from "next/image";

export const AboutFooter = () => {
  return (
    <section className="relative h-[38rem]">
      <div className="container grid grid-cols-2 py-40">
        <div className="relative z-10 col-start-2 rounded-md bg-white/30 p-6 backdrop-blur-xl">
          <h4 className="text-2xl font-medium">Join the M2Mtek Experience</h4>
          <p className="text-balance pt-3 text-xl">
            At M2Mtek, we believe in creating smarter, more comfortable
            environments for everyone. Partner with us and experience the
            difference of thoughtful design and cutting-edge innovation.
          </p>
        </div>
      </div>
      <Image
        src="/images/about-footer.jpg"
        fill
        className="z-0 select-none object-cover"
        alt=""
      />
    </section>
  );
};
