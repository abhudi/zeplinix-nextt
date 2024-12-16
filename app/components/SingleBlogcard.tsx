import Image from "next/image";
type BlogCardProps = {
  image: string;
  title: string;
  author: string;
  date: string;
  category: string;
};

const BlogCard: React.FC<BlogCardProps> = ({
  image,
  title,
  // author,
  date,
  // category,
}) => {
  return (
    <div
      className="flex flex-col w-full sm:w-[373px] h-full p-[18px] border-[0.4px] rounded-[12px] rounded-br-lg bg-glass border-[#8b8b8b]"
      style={{ opacity: 1 }}
    >
      <Image
        src={image}
        alt={title}
        width={373}
        height={200}
        className="object-cover w-full h-1/2 rounded-[12px]"
      />
      <div className="flex flex-col p-1 space-y-2 h-full mt-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-400">
          {/* {author} <span className="mx-2">•</span> */}
          {date}
        </p>

        {/* <li className="text-sm text-white">{category}</li> */}
        {/* <Link
          href="#"
          className="text-red-400 text-sm mt-4 flex items-center gap-2"
        >
          Read More
          <svg
            className="w-4 h-4  "
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
        </Link> */}
      </div>
    </div>
  );
};

export default BlogCard;
