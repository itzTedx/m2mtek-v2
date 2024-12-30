import { Button } from "@/components/ui/button";

export const ExpertiseSection = () => {
  return (
    <section className="container grid gap-6 md:grid-cols-2 md:pb-28">
      <ul className="-mt-40 space-y-12 md:-mt-36 md:px-9">
        {EXPERTISE_ITEMS.map((item, index) => (
          <li key={index} className="rounded-xl bg-brand p-10">
            {item.Icon}
            <h4 className="pb-3 pt-6 font-aloevera text-3xl font-bold text-white md:text-5xl">
              {item.title}
            </h4>
            <p className="text-xl text-brand-100">{item.description}</p>
          </li>
        ))}
      </ul>

      <div className="overflow-x-clip py-12 md:py-20">
        <p className="pb-3 tracking-wide text-accent-700">Our Expertise</p>
        <h3 className="font-aloevera text-5xl font-medium md:text-8xl">
          Solutions <br />
          for Every
          <br />
          <span className="flex items-center text-brand md:gap-4">
            Environment{" "}
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
        </h3>
        <p className="text-balance pb-6 pt-3 leading-loose">
          Explore innovative products that transform spaces. From ergonomic
          workstations to advanced mounting solutions and healthcare
          innovations, M2Mtek offers smart, reliable, and stylish solutions for
          your needs.
        </p>
        <Button className="font-aloevera">Explore Our Products</Button>
      </div>
    </section>
  );
};

const IconErgonomic = () => {
  return (
    <svg
      width="90"
      height="66"
      viewBox="0 0 90 66"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M70.5759 13.6959H85.8159C87.0399 13.6959 87.9999 14.6799 87.9999 15.8799V16.2639"
        stroke="#0075A4"
        strokeWidth="3"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M60.1121 13.6959H29.8721"
        stroke="#0075A4"
        strokeWidth="3"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M6.18402 51.784H3.80802C2.58402 51.784 1.62402 50.824 1.62402 49.6V15.904C1.62402 14.704 2.58402 13.72 3.80802 13.72H19.12"
        stroke="#0075A4"
        strokeWidth="3"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M19.1201 51.7839H11.5601"
        stroke="#0075A4"
        strokeWidth="3"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M87.9999 22.12V49.576C87.9999 50.8 87.0399 51.76 85.8159 51.76H70.5759"
        stroke="#0075A4"
        strokeWidth="3"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M60.1121 51.7839H29.8721"
        stroke="#0075A4"
        strokeWidth="3"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M8.43999 19.384H19.12V46.576H8.43999C7.47999 46.576 6.68799 45.784 6.68799 44.848V21.112C6.68799 20.176 7.45599 19.384 8.43999 19.384Z"
        stroke="#0075A4"
        strokeWidth="3"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M42.1121 21.112V44.824C42.1121 45.76 41.3441 46.552 40.3601 46.552H29.8481V19.384H40.3601C41.3201 19.384 42.1121 20.176 42.1121 21.112Z"
        stroke="#0075A4"
        strokeWidth="3"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M70.5759 19.384H81.0879C82.0479 19.384 82.8639 20.176 82.8639 21.112V44.824C82.8639 45.76 82.0719 46.552 81.0879 46.552H70.5759"
        stroke="#0075A4"
        strokeWidth="3"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M60.112 46.576H49.144C48.208 46.576 47.416 45.784 47.416 44.848V21.112C47.416 20.176 48.208 19.384 49.144 19.384H60.112"
        stroke="#0075A4"
        strokeWidth="3"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M29.8721 19.384V13.696V10.168"
        stroke="#0075A4"
        strokeWidth="3"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M29.872 5.05598V3.15998C29.872 2.29598 29.2 1.59998 28.384 1.59998H20.608C19.792 1.59998 19.144 2.29598 19.144 3.15998V62.584C19.144 63.424 19.792 64.12 20.608 64.12H28.384C29.2 64.12 29.872 63.424 29.872 62.584V19.384"
        stroke="#0075A4"
        strokeWidth="3"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M69.0881 1.59998H61.6001C60.7783 1.59998 60.1121 2.26618 60.1121 3.08798V62.632C60.1121 63.4538 60.7783 64.12 61.6001 64.12H69.0881C69.9099 64.12 70.5761 63.4538 70.5761 62.632V3.08798C70.5761 2.26618 69.9099 1.59998 69.0881 1.59998Z"
        stroke="#0075A4"
        strokeWidth="3"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M23.344 6.59192H25.48"
        stroke="#0075A4"
        strokeWidth="3"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M23.344 12.256H25.48"
        stroke="#0075A4"
        strokeWidth="3"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M23.344 17.944H25.48"
        stroke="#0075A4"
        strokeWidth="3"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M23.344 23.608H25.48"
        stroke="#0075A4"
        strokeWidth="3"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M23.344 29.272H25.48"
        stroke="#0075A4"
        strokeWidth="3"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M23.344 34.936H25.48"
        stroke="#0075A4"
        strokeWidth="3"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M23.344 40.6H25.48"
        stroke="#0075A4"
        strokeWidth="3"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M23.344 46.288H25.48"
        stroke="#0075A4"
        strokeWidth="3"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M23.344 51.952H25.48"
        stroke="#0075A4"
        strokeWidth="3"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M23.344 57.616H25.48"
        stroke="#0075A4"
        strokeWidth="3"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M64.2639 6.59192H66.3999"
        stroke="#0075A4"
        strokeWidth="3"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M64.2639 12.256H66.3999"
        stroke="#0075A4"
        strokeWidth="3"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M64.2639 17.944H66.3999"
        stroke="#0075A4"
        strokeWidth="3"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M64.2639 23.608H66.3999"
        stroke="#0075A4"
        strokeWidth="3"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M64.2639 29.272H66.3999"
        stroke="#0075A4"
        strokeWidth="3"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M64.2639 34.936H66.3999"
        stroke="#0075A4"
        strokeWidth="3"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M64.2639 40.6H66.3999"
        stroke="#0075A4"
        strokeWidth="3"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M64.2639 46.288H66.3999"
        stroke="#0075A4"
        strokeWidth="3"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M64.2639 51.952H66.3999"
        stroke="#0075A4"
        strokeWidth="3"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M64.2639 57.616H66.3999"
        stroke="#0075A4"
        strokeWidth="3"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
    </svg>
  );
};

const IconMount = () => {
  return (
    <svg
      width="90"
      height="90"
      viewBox="0 0 90 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M82.0962 2.10398V25.24H73.0962V2.10398C73.0962 1.81598 73.3122 1.59998 73.6002 1.59998H81.6402C81.9042 1.59998 82.1202 1.81598 82.1202 2.10398H82.0962Z"
        stroke="#0075A4"
        strokeWidth="3"
        strokeMiterlimit="10"
      />
      <path
        d="M82.072 43H73.072V81.832H82.072V43Z"
        stroke="#0075A4"
        strokeWidth="3"
        strokeMiterlimit="10"
      />
      <path
        d="M72.1361 25.24H83.0561C83.5121 25.24 83.8721 25.6 83.8721 26.056V42.184C83.8721 42.64 83.5121 43 83.0561 43H72.1361C71.6801 43 71.3201 42.64 71.3201 42.184V26.056C71.3201 25.6 71.6801 25.24 72.1361 25.24Z"
        stroke="#0075A4"
        strokeWidth="3"
        strokeMiterlimit="10"
      />
      <path
        d="M88.0002 85.528V88.024H67.0962V85.528C67.0962 83.488 68.7522 81.832 70.7922 81.832H84.3042C86.3442 81.832 88.0002 83.488 88.0002 85.528Z"
        stroke="#0075A4"
        strokeWidth="3"
        strokeMiterlimit="10"
      />
      <path
        d="M49.192 29.728H40.48V38.632H49.192V29.728Z"
        stroke="#0075A4"
        strokeWidth="3"
        strokeMiterlimit="10"
      />
      <path
        d="M71.32 29.728H61.144V38.632H71.32V29.728Z"
        stroke="#0075A4"
        strokeWidth="3"
        strokeMiterlimit="10"
      />
      <path
        d="M55.1681 28.192V40.144H50.0081C49.5521 40.144 49.1921 39.784 49.1921 39.328V29.032C49.1921 28.576 49.5521 28.192 50.0081 28.192H55.1681Z"
        stroke="#0075A4"
        strokeWidth="3"
        strokeMiterlimit="10"
      />
      <path
        d="M61.144 29.032V39.328C61.144 39.784 60.76 40.144 60.304 40.144H55.144V28.192H60.304C60.76 28.192 61.144 28.576 61.144 29.032Z"
        stroke="#0075A4"
        strokeWidth="3"
        strokeMiterlimit="10"
      />
      <path
        d="M40.4801 23.464V44.944L46.2641 50.752V56.536H40.4801L34.6721 50.752H13.2161L7.3841 56.536H1.6001V50.752L7.3841 44.968V23.488L1.6001 17.68V11.896H7.3841L13.1921 17.68H34.6481L40.4801 11.896H46.2641V17.68L40.4801 23.464Z"
        stroke="#0075A4"
        strokeWidth="3"
        strokeMiterlimit="10"
      />
      <path
        d="M23.9441 41.68C28.0929 41.68 31.4561 38.3168 31.4561 34.168C31.4561 30.0192 28.0929 26.656 23.9441 26.656C19.7954 26.656 16.4321 30.0192 16.4321 34.168C16.4321 38.3168 19.7954 41.68 23.9441 41.68Z"
        stroke="#0075A4"
        strokeWidth="3"
        strokeMiterlimit="10"
      />
      <path
        d="M7.45612 50.944C7.64169 50.944 7.79212 50.7935 7.79212 50.608C7.79212 50.4224 7.64169 50.272 7.45612 50.272C7.27055 50.272 7.12012 50.4224 7.12012 50.608C7.12012 50.7935 7.27055 50.944 7.45612 50.944Z"
        stroke="#0075A4"
        strokeWidth="3"
        strokeMiterlimit="10"
      />
      <path
        d="M40.264 50.944C40.4495 50.944 40.6 50.7935 40.6 50.608C40.6 50.4224 40.4495 50.272 40.264 50.272C40.0784 50.272 39.928 50.4224 39.928 50.608C39.928 50.7935 40.0784 50.944 40.264 50.944Z"
        stroke="#0075A4"
        strokeWidth="3"
        strokeMiterlimit="10"
      />
      <path
        d="M7.45612 18.208C7.64169 18.208 7.79212 18.0576 7.79212 17.872C7.79212 17.6864 7.64169 17.536 7.45612 17.536C7.27055 17.536 7.12012 17.6864 7.12012 17.872C7.12012 18.0576 7.27055 18.208 7.45612 18.208Z"
        stroke="#0075A4"
        strokeWidth="3"
        strokeMiterlimit="10"
      />
      <path
        d="M40.264 18.208C40.4495 18.208 40.6 18.0576 40.6 17.872C40.6 17.6864 40.4495 17.536 40.264 17.536C40.0784 17.536 39.928 17.6864 39.928 17.872C39.928 18.0576 40.0784 18.208 40.264 18.208Z"
        stroke="#0075A4"
        strokeWidth="3"
        strokeMiterlimit="10"
      />
    </svg>
  );
};

const IconHealthcare = () => {
  return (
    <svg
      width="88"
      height="86"
      viewBox="0 0 88 86"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M63.2 5.048C65.552 3.152 68.552 2 71.816 2C79.4 2 85.568 8.144 85.568 15.752C85.568 23.36 79.424 29.504 71.816 29.504C64.208 29.504 58.064 23.36 58.064 15.752C58.064 13.568 58.568 11.504 59.48 9.656"
        stroke="#0075A4"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M71.8401 10.2319V21.2719"
        stroke="#0075A4"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M77.3361 15.752H66.3201"
        stroke="#0075A4"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25.4961 43.28H33.6801L36.9441 37.832L40.9521 44.048L47.0241 33.896L54.6801 47.528L59.1921 40.184H69.9921"
        stroke="#0075A4"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.056 56.168H3.272C2.56949 56.168 2 56.7375 2 57.44V77.984C2 78.6865 2.56949 79.256 3.272 79.256H12.056C12.7585 79.256 13.328 78.6865 13.328 77.984V57.44C13.328 56.7375 12.7585 56.168 12.056 56.168Z"
        stroke="#0075A4"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.928 56.4801C12.128 47.1681 9.68005 36.2241 15.056 26.0481"
        stroke="#0075A4"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.936 21.6559C26.408 13.4239 36.104 14.5279 47.048 24.9439C50.528 21.3199 54.152 18.4399 58.088 17.3359"
        stroke="#0075A4"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M79.3041 27.2959C82.1601 34.9279 81.9681 41.5999 78.8241 47.3599C77.8881 49.0639 76.6401 50.5759 75.2961 51.9679L57.3201 70.7359"
        stroke="#0075A4"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.3279 58.5199C20.4319 56.9359 27.1759 55.5919 33.0319 54.7519C35.8639 54.3439 38.7199 54.3199 41.5759 54.6559C44.2639 54.9679 46.6399 55.3999 49.3039 56.1679C55.0639 57.9199 53.2639 65.4799 48.3199 64.8559L39.0319 63.6319C36.0319 63.3199 34.3759 68.1199 37.5919 69.2959L48.9679 71.4559C50.5519 71.7439 52.2079 71.7439 53.7919 71.4319L71.3359 67.9759C75.8959 67.2079 78.3199 73.3519 73.2559 75.2479L47.9599 83.4559C44.5999 84.7519 40.9999 84.7759 37.2319 83.7439L13.3279 76.9999"
        stroke="#0075A4"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const EXPERTISE_ITEMS = [
  {
    Icon: <IconErgonomic />,
    title: "Ergonomic Workspaces",
    description:
      "Smart desks, height-adjustable workstations, and accessories designed for comfort and productivity.",
  },
  {
    Icon: <IconMount />,
    title: "Advanced Mounting Solutions",
    description:
      "Motorized TV lifts, heavy-duty monitor arms, and compact mounting systems for diverse applications.",
  },
  {
    Icon: <IconHealthcare />,
    title: "Healthcare Innovations",
    description:
      "Medical carts and CPU holders designed to improve efficiency and patient care.",
  },
];
