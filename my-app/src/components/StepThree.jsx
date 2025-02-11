import React from "react";

const StepThree = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row gap-[16px]">
        <button className=" w-full   h-[48px] rounded-lg border border-[#24A0B5] text-[#24A0B5]">
          Book Another Ticket
        </button>

        <button className=" w-full h-[48px] bg-[#24A0B5] rounded-lg text-white">
          Download Ticket
        </button>
      </div>
    </div>
  );
};

export default StepThree;
