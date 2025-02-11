const StepOne = () => {
    const ticketTypes = [
        { id: 'regular', name: 'Regular Access', price: 'Free', available: '20/52' },
        { id: 'vip', name: 'VIP Access', price: '$150', available: '20/52' },
        { id: 'vvip', name: 'VVIP Access', price: '$150', available: '20/52' }
      ];
      const handleSubmit = (e) => {
        e.preventDefault();
      };
  return (
    <div className="flex flex-col justify-center sm:p-6 gap-8 bg-[#08252B] sm:border sm:border-[#0E464F] sm:rounded-[32px] flex-none self-stretch">
      <div
        className="form-box flex flex-col items-center p-6 gap-2
  border-[2px] border-[#07373F] border-t-0 
  backdrop-blur-[7px] rounded-[24px]"
      >
        <div className="flex flex-col items-center p-0 gap-2 flex-none">
          <h1 className="text-[1.3rem] sm:text-[3rem] leading-[100%] text-center text-[#FAFAFA]  flex-grow-0">
            Techember Fest ”25
          </h1>
          <p className="sm:max-w-[340px] text-[14px] sm:text-[16px] leading-[150%] text-center text-[#FAFAFA]">
            Join us for an unforgettable experience at [Event Name]! Secure your
            spot now.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-[359px] text-white items-center">
            <span>📍 [Event Location]</span>
            <span className="hidden sm:block">| |</span>
            <span>March 15, 2025 | 7:00 PM</span>
          </div>
        </div>
      </div>
      <div className=" h-[4px] bg-[#0E464F]"></div>
      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-[32px]">
        <div className="flex flex-col gap-[8px]">
        <label className="text-white" htmlFor="ticketType">Select Ticket Type:</label>
        <div className="flex flex-col sm:flex-row justify-center items-center p-4 gap-4 bg-[#052228] border border-[#07373F] rounded-[24px]">
        {ticketTypes.map((ticket) => (
              <div key={ticket.id} className="relative w-full ">
                <input
                  type="radio"
                  id={ticket.id}
                  name="ticketType" 
                  value={ticket.id}
                  className="sr-only peer"
                />
                <div
                  className="flex flex-col p-3 border-[2px] border-[#197686] rounded-[12px] cursor-pointer 
                           transition-all duration-200
                           hover:bg-[#2C545B] focus-within:ring-2 focus-within:ring-teal-400
                           relative"
                >
                  <span className="text-[24px] font-semibold mb-[12px] text-white">{ticket.price}</span>
                  <span className="text-[16px] uppercase text-[#FAFAFA]">{ticket.name}</span>
                  <span className="text-sm text-[#FAFAFA]">{ticket.available}</span>
                  
                  
                </div>
              </div>
            ))}
        </div>
        </div>
        <div className="flex flex-col gap-[8px]">
        <label className="text-white" htmlFor="ticketQuantity">Number of Tickets</label>
        <select
            id="ticketCount"
            className="w-full p-3 border bg-transparent rounded-[12px]  text-white
                     border-[#07373F]"
          >
            {[1, 2, 3, 4, 5].map(num => (
              <option key={num} value={num} className="bg-tra">{num}</option>
            ))}
          </select>
        </div>
        <div className="flex flex-col sm:flex-row gap-[16px]">
        <button className=" w-full   h-[48px] rounded-lg border border-[#24A0B5] text-[#24A0B5]">
  Cancel
</button>

        <button className=" w-full h-[48px] bg-[#24A0B5] rounded-lg text-white">
  Next
</button>
</div>

      </form>
    </div>
  );
};

export default StepOne;
