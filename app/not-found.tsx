import Link from "next/link";
import Image from "next/image";
export default function NotFound() {
  return (
    <div
      className="flex flex-col items-center justify-center h-screen text-gray-800 bg-cover bg-center"
      style={{
        backgroundImage: "url('/404.png')",
      }}
    >
      <h1
        className="text-6xl font-bold text-white"
        style={{ textShadow: "4px 0px 2px rgba(201,49,49,1);" }}
      >
        <div className="flex gap-2 items-center">
          <span className="text-[84px]">4</span>
          <span>
            <Image
              src="/404errorzero.png"
              alt={""}
              width={60}
              height={60}
              className="object-cover rounded-t-lg"
            />
          </span>
          <span className="text-[84px]">4</span>
        </div>
      </h1>
      <p className="text-xl mt-4 text-white">
        Oops! The page you are looking for does not exist.
      </p>
      <Link href="/">
        <button className="px-4 py-2 mt-5 bg-transparent text-white font-semibold rounded-full shadow-lg hover:bg-primary hover:text-white transition border border-light-gray flex items-center gap-2 sm:px-6 sm:py-3">
          Go back to home
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5"
            width="28"
            height="21"
            viewBox="0 0 28 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ rotate: "-35deg" }}
          >
            <path
              d="M17.2309 20.0182L15.3864 18.1655L22.0701 11.6409L0.875 11.6409L0.875 9.07841L22.0701 9.07841L15.3864 2.55386L17.2309 0.701172L27.125 10.3597L17.2309 20.0182Z"
              fill="#ffffff"
            />
          </svg>
        </button>
      </Link>
    </div>
  );
}
