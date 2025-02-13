import { useState, useRef } from "react";
import { useTicket } from "./context/TicketContext";

const StepOne = () => {
  const {
    selectedTicket,
    setSelectedTicket,
    ticketCount,
    setTicketCount,
    previousStep,
    nextStep,
  } = useTicket();

  const firstRadioRef = useRef(null);
  const selectRef = useRef(null);
  const cancelButtonRef = useRef(null);
  const submitButtonRef = useRef(null);
  const [selectedButton, setSelectedButton] = useState(null);
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const handleRadioKeyDown = (event, index) => {
    switch (event.key) {
      case "ArrowRight":
        event.preventDefault();
        if (index < ticketTypes.length - 1) {
          document.getElementById(ticketTypes[index + 1].id).focus();
        }
        break;
      case "ArrowLeft":
        event.preventDefault();
        if (index > 0) {
          document.getElementById(ticketTypes[index - 1].id).focus();
        }
        break;
      case "ArrowDown":
        event.preventDefault();
        selectRef.current.focus();
        break;
      case "Enter":
        event.preventDefault();
        setSelectedTicket(ticketTypes[index].id);
        document.getElementById(ticketTypes[index].id).checked = true;
        break;
    }
  };

  const handleSelectKeyDown = (event) => {
    const select = selectRef.current;

    switch (event.key) {
      case "Enter":
        event.preventDefault();
        if (!isSelectOpen) {
          setIsSelectOpen(true);
          select.size = 5;
        } else {
          setIsSelectOpen(false);
          select.size = 1;
        }
        break;
      case "ArrowDown":
        event.preventDefault();
        if (isSelectOpen) {
          const currentIndex = select.selectedIndex;
          if (currentIndex < select.options.length - 1) {
            select.selectedIndex = currentIndex + 1;
          }
        } else {
          cancelButtonRef.current.focus();
        }
        break;
      case "ArrowUp":
        event.preventDefault();
        if (isSelectOpen) {
          const currentIndex = select.selectedIndex;
          if (currentIndex > 0) {
            select.selectedIndex = currentIndex - 1;
          }
        } else {
          firstRadioRef.current.focus();
        }
        break;
      case "Escape":
        if (isSelectOpen) {
          setIsSelectOpen(false);
          select.size = 1;
        }
        break;
    }
  };

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setTicketCount(selectedValue);
    if (isSelectOpen) {
      setIsSelectOpen(false);
      selectRef.current.size = 1;
      cancelButtonRef.current.focus();
    }
  };

  const handleButtonKeyDown = (event) => {
    switch (event.key) {
      case "ArrowLeft":
      case "ArrowRight":
        event.preventDefault();
        {
          const nextButton =
            event.currentTarget === cancelButtonRef.current
              ? submitButtonRef.current
              : cancelButtonRef.current;
          nextButton.focus();
          setSelectedButton(nextButton);
        }
        break;
      case "ArrowUp":
        event.preventDefault();
        selectRef.current.focus();
        break;
      case "Enter":
        event.preventDefault();
        event.currentTarget.click();
        break;
    }
  };

  const ticketTypes = [
    {
      id: "regular",
      name: "Regular Access",
      price: "Free",
      available: "20/52",
    },
    { id: "vip", name: "VIP Access", price: "$50", available: "20/52" },
    { id: "vvip", name: "VVIP Access", price: "$150", available: "20/52" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div className="flex flex-col justify-center sm:p-6 gap-8 bg-[#08252B] sm:border sm:border-[#0E464F] sm:rounded-[32px] flex-none self-stretch">
      <div className="form-box flex flex-col items-center p-6 gap-2 border-[2px] border-[#07373F] border-t-0 backdrop-blur-[7px] rounded-[24px]">
        <div className="flex flex-col items-center p-0 gap-2 flex-none">
          <h1 className="text-[48px] font-roadRage sm:text-[64px] leading-[100%] text-center text-[#FAFAFA] flex-grow-0">
            Techember Fest &quot;25
          </h1>
          <p className="sm:max-w-[340px] font-roboto text-[14px] sm:text-[16px] leading-[150%] text-center text-[#FAFAFA]">
            Join us for an unforgettable experience at [Event Name]! Secure your
            spot now.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-[359px] text-white items-center font-roboto">
            <span>📍 [Event Location]</span>
            <span className="hidden sm:block">| |</span>
            <span>March 15, 2025 | 7:00 PM</span>
          </div>
        </div>
      </div>
      <div className="h-[4px] bg-[#0E464F]"></div>
      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-[32px]">
        <div className="flex flex-col gap-[8px] font-roboto relative">
          <div className="flex justify-between items-center">
            <label className="text-white" htmlFor="ticketType">
              Select Ticket Type:
            </label>
          </div>
          <fieldset className="flex flex-col sm:flex-row justify-center items-center p-4 gap-4 bg-[#052228] border border-[#07373F] rounded-[24px]">
            <legend className="sr-only">Choose a Ticket Type</legend>
            {ticketTypes.map((ticket, index) => (
              <div key={ticket.id} className="relative w-full">
                <input
                  type="radio"
                  id={ticket.id}
                  name="ticketType"
                  value={ticket.id}
                  className="sr-only peer"
                  ref={index === 0 ? firstRadioRef : null}
                  onKeyDown={(e) => handleRadioKeyDown(e, index)}
                  checked={selectedTicket === ticket.id}
                  onChange={() => setSelectedTicket(ticket.id)}
                />
                <label
                  htmlFor={ticket.id}
                  className="flex flex-col p-3 border-[2px] border-[#197686] rounded-[12px] cursor-pointer 
                           transition-all duration-200 peer-checked:bg-[#12464E] hover:bg-[#2C545B] peer-focus:ring-2 peer-focus:ring-teal-400
                           relative"
                >
                  <span className="text-[24px] font-semibold mb-[12px] text-white">
                    {ticket.price}
                  </span>
                  <span className="text-[16px] uppercase text-[#FAFAFA]">
                    {ticket.name}
                  </span>
                  <span className="text-sm text-[#FAFAFA]">
                    {ticket.available}
                  </span>
                </label>
              </div>
            ))}
          </fieldset>
        </div>

        <div className="flex flex-col gap-[8px] font-roboto relative">
          <div className="flex justify-between items-center">
            <label className="text-white" htmlFor="ticketCount">
              Number of Tickets
            </label>
          </div>
          <select
            id="ticketCount"
            ref={selectRef}
            className="w-full p-3 appearance-none border bg-[#052228] text-white rounded-[12px] border-[#07373F] 
                     focus:ring-2 focus:ring-teal-400 focus:outline-none"
            onKeyDown={handleSelectKeyDown}
            onChange={handleSelectChange}
            size={isSelectOpen ? 5 : 1}
            value={ticketCount}
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <option
                key={num}
                value={num}
                className="bg-[#052228] text-white p-2"
              >
                {num}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col sm:flex-row gap-[16px] font-jeju">
          <button
            ref={cancelButtonRef}
            type="button"
            className={`w-full h-[48px] outline-none rounded-lg border border-[#24A0B5] text-[#24A0B5] 
                       hover:bg-[#12464E] hover:text-white focus:ring-2 focus:ring-teal-400 
                       ${
                         selectedButton === cancelButtonRef
                           ? "bg-[#24A0B5] text-white"
                           : ""
                       }`}
            onKeyDown={handleButtonKeyDown}
            onClick={() => previousStep()}
          >
            Cancel
          </button>
          <button
            ref={submitButtonRef}
            type="submit"
            className={`w-full outline-none h-[48px] bg-[#24A0B5] rounded-lg text-white 
                       hover:bg-[#1a7a8f] focus:ring-2 focus:ring-teal-400 
                       ${
                         selectedButton === submitButtonRef
                           ? "bg-[#1a7a8f]"
                           : ""
                       }`}
            onKeyDown={handleButtonKeyDown}
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default StepOne;
