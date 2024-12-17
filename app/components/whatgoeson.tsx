import Image from "next/image";
import Link from "next/link";

export default function ExploreSection() {
  return (
    <section className="bg-black relative text-white p-6 lg:p-12 overflow-hidden">
      <div
        className="absolute inset-0 z-[1] w-[300px] h-[150px] sm:w-[600px] sm:h-[200px] md:w-[900px] lg:w-[1500px] lg:h-[500px] left-[-150px] sm:left-[-200px] md:left-[-80px] top-[50px] sm:top-[75px] lg:top-[200px]"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(230, 57, 70, 0.34) 0%, rgba(128, 32, 39, 0) 100%)",
          transform: "rotate(160deg)",
        }}
      ></div>
      <div className="max-w-7xl mx-auto flex gap-10 ">
        {/* Heading */}
        <h2 className="text-4xl lg:text-6xl font-normal mb-8 text-left w-[30%] leading-[1.8]">
          Take a peep at <span className="text-red-500">what goes on</span> at
          Zelpinix!
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-12 gap-4 z-10 w-[70%] border-0.4 border-lighest-gray p-4 rounded-lg">
          {/* Row 1 */}
          <div className="col-span-6">
            <Image
              src="/careers/whatgoeson/first.png"
              alt="Team Working"
              width={300}
              height={200}
              className="w-full h-full object-cover rounded"
            />
          </div>
          <div className="col-span-6">
            <Image
              src="/careers/whatgoeson/second.png"
              alt="Team Member"
              width={300}
              height={200}
              className="w-full h-full object-cover rounded"
            />
          </div>

          {/* Row 2 */}
          <div className="col-span-5 grid grid-rows-2 gap-4">
            <Image
              src="/careers/whatgoeson/third.png"
              alt="Desk Setup Top"
              width={400}
              height={300}
              className="w-full h-[200px] object-cover rounded"
            />
            <Image
              src="/careers/whatgoeson/third.png"
              alt="Desk Setup Bottom"
              width={400}
              height={300}
              className="w-full h-[200px] object-cover rounded"
            />
          </div>
          <div className="col-span-7">
            <Image
              src="/careers/whatgoeson/fourth.png"
              alt="Tall Image"
              width={400}
              height={500}
              className="w-full h-[420px] object-cover rounded"
            />
          </div>

          {/* Row 3 */}
          <div className="col-span-5">
            <Image
              src="/careers/whatgoeson/fifth.png"
              alt="Laughing Team"
              width={400}
              height={300}
              className="w-full h-[200px] object-cover rounded"
            />
          </div>
          <div className="col-span-7 grid grid-cols-2 gap-4">
            <div>
              <Image
                src="/careers/whatgoeson/sixth.png"
                alt="Small Image 1"
                width={200}
                height={150}
                className="w-full h-[200px] object-cover rounded"
              />
            </div>
            <div className="bg-[#414141] flex items-center justify-center ">
              <div className="text-center">
                <div className="relative">
                  <div className="w-12 h-12 rounded-full border-2 border-[#8B8B8B] flex items-center justify-center mx-auto">
                    <Link href="">
                      <span className="text-red-600 font-bold text-lg">
                        <svg
                          className="w-5 h-5"
                          width="28"
                          height="21"
                          viewBox="0 0 28 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{ rotate: "0deg" }}
                        >
                          <path
                            d="M17.2309 20.0182L15.3864 18.1655L22.0701 11.6409L0.875 11.6409L0.875 9.07841L22.0701 9.07841L15.3864 2.55386L17.2309 0.701172L27.125 10.3597L17.2309 20.0182Z"
                            fill="#E63946"
                          />
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>
                <h1 className="text-white mt-4">Explore More</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
