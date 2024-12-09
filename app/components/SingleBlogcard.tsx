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
      className="flex flex-col w-full sm:w-[373px] h-full p-[18px] border-[0.4px] rounded-[12px] rounded-br-lg bg-glass"
      style={{ opacity: 1 }}
    >
      <Image
        src={image}
        alt={title}
        width={373}
        height={200}
        className="object-cover w-full h-1/2 rounded-[12px]"
      />
      <div className="flex flex-col p-4 space-y-2 h-full">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-400">
          {author} • {date}
        </p>
        <p className="text-sm text-red-400">{category}</p>
        <a href="#" className="text-red-400 text-sm mt-2 flex items-center">
          Read More
          <span className="ml-2">&rarr;</span>
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
