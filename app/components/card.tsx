import Image from "next/image";

interface RenewalCardProps {
  imageSrc: string;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
}

const RenewalCard: React.FC<RenewalCardProps> = ({
  imageSrc,
  title,
  description,
  linkText,
  linkHref,
}) => {
  return (
    <div
      className="relative w-[290px] h-auto lg:w-[344px] lg:h-[369px] md-[344px] md-[369px] p-6 bg-bg-card text-white shadow-lg flex flex-col justify-between border border-[#8b8b8b] mt-40 mb-40"
      style={{ borderWidth: "0.4px", borderRadius: "20px" }}
    >
      {/* Image wrapper with absolute positioning */}
      <div className="absolute -top-14 left-1/2 transform -translate-x-[42%] w-[100%]">
        <Image
          src={imageSrc}
          alt={`${title} Screenshot`}
          width={500}
          height={500}
          className="object-cover rounded-t-lg w-64 lg:w-72 md:w-72"
          style={{ height: "auto" }}
        />
      </div>

      {/* Content section with adjusted spacing */}
      <div className="mt-24 flex flex-col flex-grow justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-left">{title}</h2>
          <p className="text-fs-14 my-4 text-left text-[#909090]">
            {description}
          </p>
        </div>
        <a
          href={linkHref}
          className="flex items-center text-left text-[#E63946] hover:underline font-bold gap-1"
        >
          {linkText}{" "}
          <svg
            className="w-5 h-5  "
            width="28"
            height="21"
            viewBox="0 0 28 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ rotate: "-35deg" }}
          >
            <path
              d="M17.2309 20.0182L15.3864 18.1655L22.0701 11.6409L0.875 11.6409L0.875 9.07841L22.0701 9.07841L15.3864 2.55386L17.2309 0.701172L27.125 10.3597L17.2309 20.0182Z"
              fill="#E63946"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default RenewalCard;
