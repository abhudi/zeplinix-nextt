"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const HomeServiceCard: React.FC = () => {
  return (
    <>
      <div className="relative text-fs-44 text-left mx-11 lg:mx-32 lg:mt-40 leading-tight">
        Our services{" "}
        <Image
          className="absolute w-8 left-[150px] top-[90px] lg:left-[235px] lg:top-[40px] md:left-[235px] md:top-[40px] hidden lg:block md:block"
          src={"/icon.png"}
          alt=""
          width={100}
          height={100}
        />
      </div>

      <div className="relative w-full mx-auto mt-12 mb-24 h-auto flex flex-col gap-6 items-center">
        {/* Fixed Element */}

        {/* Card 1 */}
        <div className="card one sticky top-[50px] w-4/5 mx-5 bg-home-card h-auto rounded-2xl flex flex-col sm:flex-row items-center justify-center text-white font-medium backdrop-blur-xl bg-opacity-50 border-0.1 border-[#8b8b8b] ">
          <div className="flex flex-col sm:flex-row items-center gap-4 px-6 sm:px-12 overflow-hidden w-full p-10 ">
            <div className="w-full sm:w-[50%] px-4 sm:px-0">
              <Image
                src={"/service/icons/software.png"}
                alt="service icon"
                className="w-20 h-20 text-primary"
                width={200}
                height={200}
              />
              <h3 className="text-fs-20 lg:text-fs-44 font-semibold text-white text-center lg:text-left mb-2 pt-5 leading-tight">
                Software <br className="hidden lg:block" /> Development
              </h3>
              <p className="text-[#909090] mb-10 text-center sm:text-left">
                Drive innovation and achieve your business goals with
                tailor-made software solutions. At Zeplinix technologies, we
                specialize in designing, developing, and delivering custom
                software that aligns perfectly with your requirements, helping
                you stay ahead in a market.
              </p>
              <Link
                href="/software"
                className="text-primary text-fs-16 font-bold flex items-center gap-1"
              >
                Learn more
                <svg
                  className="w-5 h-5  "
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
              </Link>
            </div>
            <div className="w-full sm:w-[50%]">
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source
                  src="/homepage/service-videos/software.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div
            className="absolute inset-0 z-[-1] w-[200px] h-[200px] sm:w-[600px] sm:h-[300px] md:w-[700px] lg:w-[357px] lg:h-[357px] left-[160px] sm:left-[300px] md:left-[720px] top-[-50px] sm:top-[-75px] lg:top-[-150px] opacity-50 hidden lg:block"
            style={{
              background:
                "radial-gradient(50% 50% at 50% 50%, rgba(230, 57, 70, 0.63) 0%, rgba(128, 32, 39, 0) 100%)",
              transform: "rotate(165deg)",
            }}
          ></div>
        </div>

        {/* Card 2 */}
        <div className="card two sticky top-[80px] ml-[20px] lg:ml-[50px] w-4/5 mx-5 bg-home-card h-auto rounded-2xl flex flex-col sm:flex-row items-center justify-center text-white font-medium backdrop-blur-xl bg-opacity-50 border-0.1 border-[#8b8b8b]">
          <div className="flex flex-col sm:flex-row items-center justify-center sm:text-center lg:text-left gap-4 px-6 sm:px-12 w-full p-10 ">
            <div className="w-full sm:w-[50%]">
              <Image
                src={"/service/icons/data.png"}
                alt="service icon"
                className="w-20 h-20 text-primary"
                width={200}
                height={200}
              />
              <h3 className="text-fs-20 lg:text-fs-44 font-semibold text-white text-center lg:text-left mb-2 pt-5 leading-tight">
                Data <br className="hidden lg:block" /> Analytics
              </h3>
              <p className="text-[#909090] mb-10 text-center sm:text-left">
                Transform your data into actionable insights with our advanced
                Data Analytics solutions. At Zeplinix technologies, we empower
                businesses to make informed decisions, optimize operations, and
                uncover new opportunities through data-driven strategies.
              </p>
              <Link
                href="/data"
                className="text-primary text-fs-16 font-bold flex items-center gap-1"
              >
                Learn more
                <svg
                  className="w-5 h-5  "
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
              </Link>
            </div>
            <div className="w-full sm:w-[50%]">
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source
                  src="/homepage/service-videos/data-analytics.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card three sticky top-[110px] ml-[40px] lg:ml-[80px]  w-4/5 mx-5 bg-home-card h-auto rounded-2xl flex flex-col sm:flex-row items-center justify-center text-white font-medium backdrop-blur-xl bg-opacity-50 border-0.1 border-[#8b8b8b]">
          <div className="flex flex-col sm:flex-row items-center justify-center sm:text-center lg:text-left gap-4 px-6 sm:px-12 w-full p-10 ">
            <div className="w-full sm:w-[50%]">
              <Image
                src={"/service/icons/cloud.png"}
                alt="service icon"
                className="w-20 h-20 text-primary"
                width={200}
                height={200}
              />
              <h3 className="text-fs-20 lg:text-fs-44 font-semibold text-white text-center lg:text-left mb-2 pt-5 leading-tight">
                Cloud <br className="hidden lg:block" /> Services
              </h3>
              <p className="text-[#909090] mb-10 text-center sm:text-left">
                Empower your business with scalable, secure, and efficient cloud
                and infrastructure solutions. At Zeplinix technologies, we help
                businesses modernize their IT operations, optimize performance,
                and enhance agility through cutting-edge cloud technologies .
              </p>
              <Link
                href="/cloud"
                className="text-primary text-fs-16 font-bold flex items-center gap-1"
              >
                Learn more
                <svg
                  className="w-5 h-5  "
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
              </Link>
            </div>
            <div className="w-full sm:w-[50%]">
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source
                  src="/homepage/service-videos/cloud.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="card four sticky top-[140px] ml-[60px] lg:ml-[110px] w-4/5 mx-5 bg-home-card h-auto rounded-2xl flex flex-col sm:flex-row items-center justify-center text-white font-medium backdrop-blur-xl bg-opacity-50 border-0.1 border-[#8b8b8b]">
          <div className="flex flex-col sm:flex-row items-center justify-center sm:text-center lg:text-left gap-4 px-6 sm:px-12 w-full p-10 ">
            <div className="w-full sm:w-[50%]">
              <Image
                src={"/service/icons/design.png"}
                alt="service icon"
                className="w-20 h-20 text-primary"
                width={200}
                height={200}
              />
              <h3 className="text-fs-20 lg:text-fs-44 font-semibold text-white text-center lg:text-left mb-2 pt-5 leading-tight">
                Graphic <br className="hidden lg:block" /> Designing
              </h3>
              <p className="text-[#909090] mb-10 text-center sm:text-left">
                Elevate your brand presence and connect with your audience like
                never before. At Zeplinix technologies, we combine creative
                design, strategic advertising, and impactful social media
                campaigns to help businesses stand out in the digital world .
              </p>
              <Link
                href="/graphic"
                className="text-primary text-fs-16 font-bold flex items-center gap-1"
              >
                Learn more
                <svg
                  className="w-5 h-5  "
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
              </Link>
            </div>
            <div className="w-full sm:w-[50%]">
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source
                  src="/homepage/service-videos/graphic.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeServiceCard;
