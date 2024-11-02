"use client";
import React from "react";
import CountUp from "react-countup";

const statsDate = [
  {
    value: 1.2,
    type: "Hotels",
    unit: "k",
  },
  {
    value: 4.8,
    type: "Rooms",
    unit: "k",
  },
  {
    value: 3.2,
    type: "Users",
    unit: "k",
  },
];

const Stats = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-x-8 gap-y-4 my-10 ">
      {statsDate.map((item, index) => (
        <div key={index} className="flex">
          <div className="flex items-baseline gap-x-2">
            <h3 className="h3 text-soft_green ">
              <CountUp
                start={0}
                end={item.value}
                decimals={item.value % 1 === 0 ? 0 : 1}
                duration={2.75}
              />
              <span>{item.unit}</span>
            </h3>
            <div className="text-black font-semibold">{item.type}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stats;
