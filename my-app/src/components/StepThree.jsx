import { useRef, useEffect } from "react";
import Ticket from "./Ticket";
import { useTicket } from "./context/TicketContext";

const StepThree = () => {
  const { resetBooking } = useTicket();

  // Create refs for the buttons
  const bookAnotherRef = useRef(null);
  const downloadRef = useRef(null);

  // Focus the first button on mount
  useEffect(() => {
    if (bookAnotherRef.current) {
      bookAnotherRef.current.focus();
    }
  }, []);

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
          <button
            className="w-full h-[48px] rounded-lg border outline-none focus:ring-2 focus:ring-teal-400 hover:bg-[#12464E] hover:text-white border-[#24A0B5] text-[#24A0B5]"
            onClick={resetBooking}
            ref={bookAnotherRef}
            onKeyDown={(e) => {
              if (e.key === "ArrowRight" || e.key === "ArrowDown") {
                e.preventDefault();
                downloadRef.current.focus();
              }
            }}
          >
            Book Another Ticket
          </button>

          <button
            className="w-full h-[48px] bg-[#24A0B5] rounded-lg outline-none focus:ring-2 focus:ring-teal-400 hover:bg-[#1a7a8f] text-white"
            ref={downloadRef}
            onClick={resetBooking}
            onKeyDown={(e) => {
              if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
                e.preventDefault();
                bookAnotherRef.current.focus();
              }
            }}
          >
            Download Ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepThree;
