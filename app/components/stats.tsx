import React from "react";

const stats = [
  { title: "VALUED PROJECTS", value: "845 +" },
  { title: "TRUSTED CLIENTS", value: "100 +" },
  { title: "TEAM SIZE", value: "200 +" },
];

const Stats = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center space-x-4 space-y-4 sm:space-y-0">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-gradient-to-b from-black via-red-900 to-red-800 text-white p-6 rounded-lg shadow-lg w-60 text-center"
        >
          <h3 className="text-xl font-semibold">{stat.title}</h3>
          <p className="text-4xl font-bold mt-2">{stat.value}</p>
        </div>
      ))}
    </div>
  );
};

export default Stats;
