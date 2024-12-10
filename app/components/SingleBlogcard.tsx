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
  author,
  date,
  category,
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
          {author} <span className="mx-2">•</span> {date}
        </p>

        <li className="text-sm text-white">{category}</li>
        <a
          href="#"
          className="text-red-400 text-sm mt-4 flex items-center gap-2"
        >
          Read More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4"
            style={{ rotate: "-35deg" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
