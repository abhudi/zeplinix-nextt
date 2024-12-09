import AboutBox from "./aboutBox";

const AboutBoxComp = () => {
  const data = [
    { title: "Years in business", value: "3+" },
    { title: "Projects complete", value: "42+" },
    { title: "Constant clients", value: "24+" },
    { title: "Countries/offices", value: "3+" },
  ];

  return (
    <div className="relative flex flex-col md:flex-row items-center justify-between lg:px-6 py-12 bg-gradient-to-br">
      {/* Parent container ensures equal height */}
      <div className="flex flex-col lg:flex-row gap-6 w-fulxl relative">
        <div
          className="absolute inset-0 z-[-1] w-[300px] h-[200px] sm:w-[600px] sm:h-[300px] md:w-[900px] lg:w-[1200px] lg:h-[400px] left-[-150px] sm:left-[-200px] md:left-[-300px] top-[50px] sm:top-[75px] lg:top-[100px]"
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(230, 57, 70, 0.35) 0%, rgba(128, 32, 39, 0) 100%)",
            transform: "rotate(165deg)",
          }}
        ></div>

        {/* Animated Box Container */}
        <div className="hidden lg:flex flex-col md:flex-row gap-6 w-full md:w-[424px] lg:h-[510px] overflow-hidden animate-scroll">
          {/* Left Side - Static Boxes for Small Screens */}
          <div className="flex flex-col gap-4">
            <AboutBox title={data[0].title} value={data[0].value} />
            <AboutBox title={data[2].title} value={data[2].value} />
          </div>

          {/* Right Side - Static Boxes for Small Screens */}
          <div className="flex flex-col gap-4 mt-8 md:mt-0">
            <div className="mt-20 md:mt-28">
              <AboutBox title={data[1].title} value={data[1].value} />
            </div>
            <AboutBox title={data[3].title} value={data[3].value} />
          </div>
        </div>
        {/* Animated Box Container */}
        <div className="lg:hidden flex flex-col gap-6 w-full md:w-[424px] lg:h-[510px] overflow-hidden md:animate-scroll mb-10">
          {/* Left Side - Static Boxes for Small Screens */}
          <div className="grid grid-cols-2 gap-4 md:flex md:flex-col">
            <AboutBox title={data[0].title} value={data[0].value} />
            <AboutBox title={data[2].title} value={data[2].value} />
            <AboutBox title={data[1].title} value={data[1].value} />
            <AboutBox title={data[3].title} value={data[3].value} />
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="w-full lg:max-w-[671px] bg-[#303030] text-white p-6 sm:p-8 rounded-lg shadow-lg">
          <h2 className="text-fs-24 sm:text-fs-34 lg:text-fs-54 font-bold mb-4 sm:mb-6 leading-tight">
            Crafting Solutions For Every Challenge
            <span className="inline-block bg-red-600 w-3 h-3 rounded-full mx-1"></span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-[#B7B7B7] mb-6 sm:mb-8">
            Delivering innovative, customized solutions to help businesses
            thrive in a dynamic digital world.
          </p>
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-start gap-4 border-b border-[#8E8E8E] pb-5">
              <h3 className="text-base sm:text-lg font-normal md:w-[50%]">
                Custom Solutions
              </h3>
              <p className="text-sm sm:text-base text-gray-400 md:w-[50%]">
                We collaborate with clients to understand their specific
                challenges and develop customized strategies that enhance
                effectiveness.
              </p>
            </div>
            <div className="flex flex-col md:flex-row md:items-start gap-4 border-b border-[#8E8E8E] pb-5">
              <h3 className="text-base sm:text-lg font-normal md:w-[50%]">
                Innovative Approaches
              </h3>
              <p className="text-sm sm:text-base text-gray-400 md:w-[50%]">
                By utilizing cutting-edge technologies, we create scalable
                solutions that adapt to changing market conditions, ensuring
                sustained growth.
              </p>
            </div>
            <div className="flex flex-col md:flex-row md:items-start gap-4">
              <h3 className="text-base sm:text-lg font-normal md:w-[50%]">
                Comprehensive Insights
              </h3>
              <p className="text-sm sm:text-base text-gray-400 md:w-[50%]">
                Our team provides end-to-end support, ensuring all aspects of
                the solution are optimized and continuously improved for the
                best results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBoxComp;
