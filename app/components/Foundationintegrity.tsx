import React from "react";

const Foundationintegrity = () => {
  const features = [
    {
      title: "Transparent Communication",
      description: (
        <>
          Open, honest, and clear Solutions tailored to client needs. at every
          step.
        </>
      ),
    },
    {
      title: "Integrity in Delivery",
      description: (
        <>We deliver on our Solutions tailored to client needs. promises.</>
      ),
    },
    {
      title: "Client-Centric Focus",
      description: (
        <>
          Solutions tailored to Solutions tailored to client needs. client
          needs.
        </>
      ),
    },
    {
      title: "Collaborative Environment",
      description: (
        <>
          Inclusive teamwork Solutions tailored to client needs. drives
          innovation.
        </>
      ),
    },
  ];

  return (
    <div className="mx-4 lg:mx-9 lg:mt-10">
      <div className="p-4">
        <h1 className="text-white text-fs-44 text-left ">
          A Foundation Of <span className="text-primary">Integrity</span>
        </h1>
      </div>
      <div className="p-4">
        <div className="grid gap-6 lg:grid-cols-4 sm:grid-cols-1">
          {features.map((feature, index) => (
            <div key={index} className=" rounded shadow">
              <h1 className="text-white">{feature.title}</h1>
              <p className="text-[#909090]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Foundationintegrity;
