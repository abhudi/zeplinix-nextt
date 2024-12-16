import Image from "next/image";
import BlogCard from "./SingleBlogcard";

const blogs = [
  {
    id: 1,
    title:
      "Discover the game-changing trends in AI, automation, and cloud that are redefining businesses worldwide. Stay ahead of the curve with future-focused insights.",
    author: "Abhishek Deshmukh",
    date: "24 Oct, 2024",
    category: "Industry Insights",
    image: "/blog/first.png",
  },
  {
    id: 2,
    title: "Why Design Systems Matter for Businesses",
    author: "Abhijeet Patne",
    date: "24 Oct, 2024",
    category: "Design Innovation",
    image: "/blog/second.png",
  },
  {
    id: 3,
    title: "Success Stories of Digital Transformation",
    author: "Max Keny",
    date: "24 Oct, 2024",
    category: "Real-World App",
    image: "/blog/third.png",
  },
  {
    id: 4,
    title: "Cloud & Data: The Key to Business Growth",
    author: "Max Keny",
    date: "24 Oct, 2024",
    category: "Technology Focus",
    image: "/blog/second.png",
  },
  {
    id: 5,
    title: "Your Roadmap to Digital Transformation",
    author: "Max Keny",
    date: "24 Oct, 2024",
    category: "Practical Guidance",
    image: "/blog/third.png",
  },
];

export default function Blogcards() {
  return (
    <section className="relative text-white py-16 px-4 sm:px-8 lg:px-10 mt-20 lg:mb-20">
      <div className="text-center mb-16">
        <h1 className="text-fs-54">Read our blog</h1>
        <p className="text-fs-18 text-[#909090] ">Learn new technology</p>
      </div>
      {/* Background Gradient */}
      <div
        className="absolute top-0 left-0 w-[80vw] h-[100vh] hidden lg:block opacity-50 sm:opacity-100 lg:opacity-100"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(230, 57, 70, 0.34) 0%, rgba(128, 32, 39, 0) 100%)",
          transform: "rotate(145deg)",
          zIndex: -1,
          // Adjust based on the desired position for the background
          top: "30%", // Example: this can be changed to fit your needs
          left: "5%", // Adjust this if you need it offset from the left
        }}
      ></div>

      {/* Blog Section */}
      <div className="max-w-7xl mx-auto space-y-8">
        {/* First Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* First Blog: Larger with Image on the Left */}
          <div className="flex flex-col lg:flex-row col-span-1 p-[18px] lg:col-span-2 w-full h-auto border-[0.4px] border-[#8b8b8b] rounded-[12px] overflow-hidden">
            <Image
              src={blogs[0].image}
              alt={blogs[0].title}
              width={385}
              height={405}
              className="object-cover w-full lg:w-[55%] h-[200px] lg:h-full rounded-[12px]"
            />
            <div className="flex flex-col pl-4 w-full lg:w-[45%]">
              <h3 className="text-base lg:text-lg font-semibold mb-2">
                {blogs[0].title}
              </h3>
              <p className="text-sm text-gray-400 mb-4">
                {/* {blogs[0].author} <span className="mx-2">•</span>{" "} */}
                {blogs[0].date}
              </p>
              <p className="text-sm text-white items-center gap-3">
                <li>{blogs[0].category}</li>
              </p>
              {/* <Link
                href="#"
                className="text-[#E63946] text-sm mt-4 flex items-center gap-2"
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

          {/* Second Blog: Smaller with Image on Top */}
          <BlogCard
            image={blogs[1].image}
            title={blogs[1].title}
            author={blogs[1].author}
            date={blogs[1].date}
            category={blogs[1].category}
          />
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.slice(2).map((blog) => (
            <BlogCard
              key={blog.id}
              image={blog.image}
              title={blog.title}
              author={blog.author}
              date={blog.date}
              category={blog.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
