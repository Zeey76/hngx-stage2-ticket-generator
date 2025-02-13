const Header = () => {
  return (
    <header className="w-[100%] mx-auto max-w-[1200px] h-[76px] bg-[#05252C]/40 flex items-center justify-between px-4 py-3 border border-[#197686] rounded-[24px] mb-8">
      <img src="./logo.svg" alt="logo" className="w-[91.79px] h-9" />
      <div className="nav-items hidden  items-center p-0 gap-4 w-[341px] ">
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
      <div className="flex justify-center items-center px-4 sm:px-6 py-3 sm:py-4 gap-2 w-[145px] h-[44px] sm:w-[169px] sm:h-[52px] bg-white border border-[rgba(213,234,0,0.1)] rounded-[12px] ">
        <span className=" font-normal text-[14px] sm:text-[16px] leading-[20px]  uppercase text-[#0A0C11]">
          My Tickets
        </span>
        <img src="./arrow.svg" alt="arrow" />
      </div>
    </header>
  );
};

export default Header;
