const AboutBox = ({ title, value }: { title: string; value: string }) => {
  // Split the title by "/"
  const [mainTitle, subTitle] = title.split("/");

  return (
    <div className="bg-black bg-opacity-40 text-white max-w-[200px] p-4 rounded-lg shadow-lg border border-gray-700">
      <p className="font-bold text-fs-54">{value}</p>
      <h2 className="font-normal text-fs-24">
        {mainTitle}
        {subTitle && <br />} {/* Add a line break if subTitle exists */}
        {subTitle}
      </h2>
    </div>
  );
};

export default AboutBox;
