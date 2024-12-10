import Link from "next/link";
import Image from "next/image";

const ServiceSliderBox = ({
  imageSrc,
  title,
  linkHref,
}: {
  imageSrc: string;
  title: string;
  linkHref: string;
}) => {
  return (
    <div className="w-full lg:w-1/4 md:w-1/2 p-4 bg-[#303030] flex items-center flex-col lg:items-start">
      <Link href={linkHref}>
        <Image
          src={imageSrc}
          alt="service icon"
          className="w-16 h-16 text-primary"
          width={80}
          height={80}
        />
        <h3 className="text-xl lg:text-2xl font-semibold text-white text-center lg:text-left mt-4">
          {title}
        </h3>
      </Link>
    </div>
  );
};

export default ServiceSliderBox;
