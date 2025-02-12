const StepThree = () => {
  return (
    <div className="w-full flex flex-col gap-[32px]">
      <div>
      <h2 className="text-[32px] text-white mb-[16px] text-center">Your Ticket is Booked!</h2>
      <p className="text-center text-[#FAFAFA]">Check your email for a copy or you can download</p>
      </div>
      <div className="flex flex-col gap-[24px]">
        <div className="flex p-[32px] relative justify-center">
          <img src="./bg.svg" alt="ticket" className=" mx-auto"/>
          <div className="absolute mt-[20px] gap-[20px] w-[260px] h-[446px] flex flex-col items-center p-[14px] bg-[rgba(3,30,33,0.1)] border border-[#24A0B5] backdrop-blur-[2px] rounded-[16px]">
<div className="flex flex-col items-center">
<h2 className="text-white ">Techember Fest ”25</h2>
<p className="text-[10px] text-white mb-[4px]">📍 04 Rumens road, Ikoyi, Lagos</p>
<p className="text-[10px] text-white">📅 March 15, 2025 | 7:00 PM</p>
</div>
<div className="w-[140px] h-[140px] rounded-[12px]">

</div>
</div>

        </div>
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
