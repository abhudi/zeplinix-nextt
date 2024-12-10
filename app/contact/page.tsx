import GetInTouchForm from "../components/contactCard";
export default function Contact() {
  return (
    <div className="mx-0 2xl:mx-24 relative">
      <div
        className="absolute inset-0 z-[1] w-[1515px] h-[568px] md:w-[800px] md:h-[300px] lg:w-[1000px] lg:h-[400px] left-[220px] top-[-50px] md:top-[-100px] lg:top-[50px] hidden lg:block"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(230, 57, 70, 0.35) 0%, rgba(128, 32, 39, 0) 100%)",
          transform: "rotate(150deg)",
        }}
      ></div>
      <div
        className="absolute inset-0 z-[-1] w-[415px] h-[568px] md:w-[800px] md:h-[300px] lg:w-[1000px] lg:h-[400px] left-[-50px] top-[-50px] md:top-[-100px] lg:top-[500px]"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(230, 57, 70, 0.35) 0%, rgba(128, 32, 39, 0) 100%)",
          transform: "rotate(180deg)",
        }}
      ></div>
      <GetInTouchForm />
    </div>
  );
}
