import Ticket from "./Ticket";

const StepThree = () => {
  return (
    <div className="w-full flex flex-col gap-[32px]">
      <div>
        <h2 className="text-[32px] text-white mb-[16px] text-center">
          Your Ticket is Booked!
        </h2>
        <p className="text-center text-[#FAFAFA]">
          Check your email for a copy or you can download
        </p>
      </div>
      <div className="flex flex-col gap-[24px]">
       <Ticket/>
        <div className="flex flex-col sm:flex-row gap-[16px]">
          <button className=" w-full   h-[48px] rounded-lg border border-[#24A0B5] text-[#24A0B5]">
            Book Another Ticket
          </button>

          <button className=" w-full h-[48px] bg-[#24A0B5] rounded-lg text-white">
            Download Ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepThree;
