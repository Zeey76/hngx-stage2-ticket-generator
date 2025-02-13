import { useTicket } from "./context/TicketContext";

const FormHeader = () => {
  const stepsHeading = ["Ticket Selection", "Attendee Details", "Ready"];
  const {currentStep} = useTicket();
  return (
    <div className="flex flex-col p-0 gap-3 w-full justify-center">
      <div className="form-header flex  justify-between items-start flex-col gap-3">
        <p className="font-jeju form-header text-[24px] text-white">
          {stepsHeading[currentStep - 1]}
        </p>
        <p className="text-[16px] text-white font-roboto">
          Step <span>{currentStep}</span>/3
        </p>
      </div>
      <div className="w-full h-[4px] bg-[#0E464F] rounded-[5px] relative">
  <div
    className="h-[4px] rounded-[5px] bg-[#24A0B5] transition-all duration-300"
    style={{ width: `${(currentStep / 3) * 100}%` }}
  ></div>
</div>

    </div>
  );
};

export default FormHeader;
