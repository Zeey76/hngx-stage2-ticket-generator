import { useTicket } from "./context/TicketContext";
import StepOne from "./StepOne";
import FormHeader from "./FormHeader";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";

const MainSection = () => {
  const { currentStep } = useTicket();
  return (
    <div className="flex flex-col justify-center items-center mx-auto p-6 sm:p-12 gap-8  w-full max-w-[390px] sm:max-w-[700px] bg-[#08252B] sm:bg-[#041E23] border border-[#0E464F] rounded-[32px] sm:rounded-[40px]">
      <FormHeader />
      {currentStep === 1 && <StepOne />}
      {currentStep === 2 && <StepTwo />}
      {currentStep === 3 && <StepThree />}
    </div>
  );
};

export default MainSection;
