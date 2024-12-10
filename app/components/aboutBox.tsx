const AboutBox = ({ title, value }: { title: string; value: string }) => {
  // Split the title by "/"
  const [mainTitle, subTitle] = title.split("/");

  return (
    <div className="bg-black bg-opacity-40 text-white max-w-[200px] p-4 rounded-xl shadow-lg border-0.4 border-[#D2D2D2]">
      <p className="font-medium text-fs-54">{value}</p>
      <h2 className="font-normal text-fs-24 text-[#909090]">
        {mainTitle}
        {subTitle && (
          <>
            <br style={{ lineHeight: "26px" }} />{" "}
            {/* Apply line height here using inline style */}
            {subTitle}
          </>
        )}
      </h2>
    </div>
  );
};

export default AboutBox;
