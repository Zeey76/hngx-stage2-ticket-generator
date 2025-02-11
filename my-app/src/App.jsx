import "./index.css";

function App() {
  return (
    <>
      <div className="container min-h-screen p-4 flex flex-col justify-center w-full  sm:max-w-[1200px] ">
        <header
          className="absolute left-1/2 top-10 transform -translate-x-1/2 sm:max-w-[1200px] 
  w-[90%] h-[76px] bg-[#05252C]/40 
  flex items-center justify-between px-4 py-3 
  border border-[#197686] 
  rounded-[24px] box-border"
        >
          <img src="./logo.svg" alt="logo" className="w-[91.79px] h-9" />
          <div className="hidden sm:flex flex-row items-center p-0 gap-4 w-[341px] ">
            <span className=" font-normal text-[18px] leading-[18px] text-white ">
              Events
            </span>
            <span className=" font-normal text-[18px] leading-[18px] text-[#B3B3B3] ">
              My Tickets
            </span>
            <span className="font-normal text-[18px] leading-[18px] text-[#B3B3B3] ">
              About Project
            </span>
          </div>
          <div className="flex justify-center items-center px-4 sm:px-6 py-3 sm:py-4 gap-2 w-[141px] h-[44px] sm:w-[169px] sm:h-[52px] bg-white border border-[rgba(213,234,0,0.1)] rounded-[12px] flex-none order-0 flex-grow-0">
            <span className=" font-normal text-[14px] sm:text-[16px] leading-[20px]  uppercase text-[#0A0C11]">
              My Tickets
            </span>
            <img src="./arrow.svg" alt="arrow" />
          </div>
        </header>

        <div
  className="flex flex-col justify-center items-center mx-auto
  p-6 sm:p-12 gap-8 sm:gap-8 w-full
   sm:max-w-[700px] h-[100px] sm:h-[92px] 
  bg-[#08252B] sm:bg-[#041E23] border border-[#0E464F] 
  rounded-[32px] sm:rounded-[40px]"
>
  <div className="flex flex-col p-0 gap-3 w-full justify-center">
    <div className="form-header flex  justify-between items-start flex-col gap-3">
      <h2 className="form-header text-[24px] text-white">Ticket Selection</h2>
      <p className="text-[16px] text-white">Step 1/3</p>
    </div>
    <div className=" h-[4px] bg-[#0E464F] rounded-[5px]"></div>

  </div>

  
</div>


      </div>
    </>
  );
}

export default App;
