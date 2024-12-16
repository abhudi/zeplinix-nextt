import Aboutheader from "../components/aboutHeader";
import ServiceCard from "../components/ServiceCard";

export default function Service() {
  const ServiceWorkWithUs = () => {
    return (
      <div>
        <div className="w-full bg-[#303030] text-white p-6 sm:p-10 md:p-14 rounded-3xl shadow-lg mt-10 lg:mt-32 ">
          <h2 className="text-fs-24 sm:text-fs-34 lg:text-fs-54 font-semibold mb-4 sm:mb-6 leading-tight pb-10 text-center md:text-left">
            Benefit of Working with us
            <span className="inline-block bg-red-600 w-3 h-3 rounded-full mx-1"></span>
          </h2>

          <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-start gap-4 border-b border-[#6d6d6d] pb-5">
              <h3 className="text-base sm:text-lg font-normal md:w-[50%] text-center md:text-left">
                Expertise and Innovation
              </h3>
              <div className="md:w-[50%] text-center md:text-left">
                <p className="text-sm sm:text-base text-[#909090] ">
                  <b>Skilled Team:</b> Work with a team of highly experienced
                  professionals proficient in cutting-edge technologies like
                  Flutter, PHP, and AI-driven solutions.
                </p>
                <p className="text-sm sm:text-base text-[#909090] ">
                  <b>Customized Solutions:</b> Tailored software and digital
                  transformation strategies to meet your unique business needs.
                </p>
                <p className="text-sm sm:text-base text-[#909090] ">
                  <b>Continuous Innovation:</b> Access to innovative ideas and
                  modern solutions that keep your business ahead of the curve.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:items-start gap-4 border-b border-[#6d6d6d] pb-5">
              <h3 className="text-base sm:text-lg font-normal md:w-[50%] text-center md:text-left">
                Seamless Project Execution
              </h3>
              <div className="md:w-[50%] text-center md:text-left">
                <p className="text-sm sm:text-base text-[#909090] ">
                  <b>Agile Methodology :</b> Projects delivered with
                  flexibility, transparency, and efficiency to meet timelines
                  and goals.
                </p>
                <p className="text-sm sm:text-base text-[#909090] ">
                  <b>End-to-End Services:</b> From planning to deployment, we
                  handle every stage of your project to ensure a smooth
                  experience.
                </p>
                <p className="text-sm sm:text-base text-[#909090] ">
                  <b>Dedicated Support:</b> A customer-first approach with
                  prompt responses and solutions to all your queries.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:items-start gap-4 border-b border-[#6d6d6d] pb-5">
              <h3 className="text-base sm:text-lg font-normal md:w-[50%] text-center md:text-left">
                Cutting-Edge Technology
              </h3>
              <div className="md:w-[50%] text-center md:text-left">
                <p className="text-sm sm:text-base text-[#909090] ">
                  <b>Future-Ready Solutions :</b> Implementation of the latest
                  technologies like AI, cloud computing, and big data analytics.
                </p>
                <p className="text-sm sm:text-base text-[#909090] ">
                  <b>Scalability :</b> Applications and software designed to
                  grow with your business.
                </p>
                <p className="text-sm sm:text-base text-[#909090] ">
                  <b>Cross-Platform Expertise :</b> Develop solutions that work
                  seamlessly across mobile, web, and desktop platforms.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:items-start gap-4">
              <h3 className="text-base sm:text-lg font-normal md:w-[50%] text-center md:text-left">
                Superior Quality and Reliability
              </h3>
              <div className="md:w-[50%] text-center md:text-left">
                <p className="text-sm sm:text-base text-[#909090] ">
                  <b>Robust Development Standards :</b> Quality assurance at
                  every step ensures reliable and efficient solutions.
                </p>
                <p className="text-sm sm:text-base text-[#909090] ">
                  <b>Consistent Performance :</b> Systems built for scalability,
                  security, and high performance.
                </p>
                <p className="text-sm sm:text-base text-[#909090] ">
                  <b>Thorough Testing :</b>Rigorous testing processes ensure
                  bug-free and user-friendly software.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const ServicePage = () => {
    // Service data array
    const services = [
      // {
      //   title: "Application Services",
      //   icon: "/service/icons/flutter.png",
      //   content:
      //     "Covers the full lifecycle of software applications, from development and deployment to ongoing maintenance. Our focus is on ensuring optimal performance, security, and user experience, while continuously adapting to meet your needs.",
      //   link: "/application", // Update link
      //   image: "/service/flutter.png",
      // },
      // {
      //   title: "Strategy and Consultancy",
      //   icon: "/service/icons/strategy.png",
      //   content:
      //     "Expert insights to drive your business forward. We analyze your current operations...",
      //   link: "/strategy", // Update link
      //   image: "/service/strategy.png",
      // },
      {
        title: "Cloud Services",
        icon: "/service/icons/cloud.png",
        content:
          "Empower your business with scalable, secure, and efficient cloud and infrastructure solutions. At Zeplinix Technologies, we help businesses modernize their IT operations, optimize performance, and enhance agility through cutting-edge cloud technologies . ",
        link: "/cloud", // Update link
        image: "/service/cloud.png",
      },
      {
        title: "Data Analytics",
        icon: "/service/icons/data.png",
        content:
          "Transform your data into actionable insights with our advanced Data Analytics solutions. At Zeplinix Technologies, we empower businesses to make informed decisions, optimize operations, and uncover new opportunities through data-driven strategies. ",
        link: "/data", // Update link
        image: "/service/data.png",
      },
      {
        title: "Software Development",
        icon: "/service/icons/software.png",
        content:
          "Drive innovation and achieve your business goals with tailor-made software solutions. At Zeplinix Technologies, we specialize in designing, developing, and delivering custom software that aligns perfectly with your  requirements, helping you stay ahead in a  market. ",
        link: "/software", // Update link
        image: "/service/software.png",
      },
      {
        title: "Graphic Designing",
        icon: "/service/icons/design.png",
        content:
          "Elevate your brand presence and connect with your audience like never before. At Zeplinix Technologies, we combine creative design, strategic advertising, and impactful social media campaigns to help businesses stand out in the digital world . ",
        link: "/graphic", // Update link
        image: "/service/strategy.png",
      },
    ];

    return (
      <div className="relative grid gap-12 mt-32 mx-4 lg:mx-9 mb-32">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}

        {/* First Absolute */}
        <div
          className="absolute inset-0 z-[-2] w-[300px] h-[200px] md:w-[800px] md:h-[300px] lg:w-[1200px] lg:h-[400px] left-[-200px] top-[50px] md:top-[75px] lg:top-[-100px] hidden lg:block md:block"
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(230, 57, 70, 0.35) 0%, rgba(128, 32, 39, 0) 100%)",
            transform: "rotate(180deg)",
          }}
        ></div>
        {/* Second Absolute */}
        <div
          className="absolute inset-0 z-[-2] w-[300px] h-[200px] md:w-[800px] md:h-[300px] lg:w-[1200px] lg:h-[400px] left-[-200px] top-[50px] md:top-[475px] lg:top-[500px] hidden lg:block md:block"
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(230, 57, 70, 0.35) 0%, rgba(128, 32, 39, 0) 100%)",
            transform: "rotate(150deg)",
          }}
        ></div>
        {/* third Absolute */}
        <div
          className="absolute inset-0 z-[-2] w-[300px] h-[200px] md:w-[800px] md:h-[300px] lg:w-[1200px] lg:h-[400px] right-[0px] top-[50px] md:top-[1000px] lg:top-[1000px] hidden lg:block md:block"
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(230, 57, 70, 0.35) 0%, rgba(128, 32, 39, 0) 100%)",
            transform: "rotate(40deg)", // Apply the rotation inside transform
          }}
        ></div>
        {/* fourth Absolute */}
        <div
          className="absolute inset-0 z-[-2] w-[300px] h-[200px] md:w-[800px] md:h-[300px] lg:w-[1200px] lg:h-[400px] left-[-200px] top-[50px] md:top-[1475px] lg:top-[1500px] hidden lg:block md:block"
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(230, 57, 70, 0.35) 0%, rgba(128, 32, 39, 0) 100%)",
            transform: "rotate(180deg)",
          }}
        ></div>

        {ServiceWorkWithUs()}
      </div>
    );
  };
  return (
    <>
      <div className="mx-0 2xl:mx-24">
        <Aboutheader />
        {ServicePage()}
      </div>
    </>
  );
}
