import React from "react";

const DetailCard = ({ title, subTitle }) => {
  return (
    <div className="flex w-[8.5rem] min-w-[8.5rem] h-[5.2rem] flex-col items-center justify-center rounded-xl bg-[#143650]">
      <span className="flex justify-start text-white font-iran text-[22px]">
        {title}
      </span>
      <span className="text-violet-200 text-sm font-iran">
        {subTitle}
      </span>
    </div>
  );
};

export default DetailCard;
