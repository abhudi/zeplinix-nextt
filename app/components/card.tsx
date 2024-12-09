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
      className="relative w-[344px] h-[369px] p-6 bg-bg-card rounded-lg text-white shadow-lg flex flex-col justify-between border border-card-border mt-40 mb-40"
      style={{ borderWidth: "0.4px" }}
    >
      {/* Image wrapper with absolute positioning */}
      <div className="absolute -top-24 left-1/2 transform -translate-x-1/2 w-[100%]">
        <Image
          src={imageSrc}
          alt={`${title} Screenshot`}
          width={800}
          height={500}
          className="object-cover rounded-t-lg"
          style={{ height: "auto" }}
        />
      </div>

      {/* Content section with adjusted spacing */}
      <div className="mt-24 flex flex-col flex-grow justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-left">{title}</h2>
          <p className="text-sm my-4 text-left">{description}</p>
        </div>
        <a
          href={linkHref}
          className="flex items-center text-left text-red-500 hover:underline font-medium"
        >
          {linkText} <span className="ml-2">→</span>
        </a>
      </div>
    </div>
  );
};

export default RenewalCard;
