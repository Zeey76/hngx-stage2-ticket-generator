import Ticket from "./Ticket";
import { useTicket } from "./context/TicketContext";
const StepThree = () => {
  const { resetBooking } = useTicket();

  return (
    <div className="w-full flex flex-col gap-[32px]">
      <div>
        <h2 className="text-[32px] text-white mb-[16px] text-center font-alatsi">
          Your Ticket is Booked!
        </h2>
        <p className="text-center text-[#FAFAFA] font-roboto">
          Check your email for a copy or you can download
        </p>
      </div>
      <div className="flex flex-col gap-[24px]">
        <Ticket />
        <div className="flex flex-col sm:flex-row gap-[16px] font-jeju">
          <button className=" w-full  h-[48px] rounded-lg border outline-none hover:bg-[#24A0B5] hover:text-white border-[#24A0B5] text-[#24A0B5]" onClick={resetBooking}>
            Book Another Ticket
          </button>

          <button className=" w-full h-[48px] bg-[#24A0B5] rounded-lg outline-none hover:bg-[#1a7a8f] text-white">
            Download Ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepThree;
