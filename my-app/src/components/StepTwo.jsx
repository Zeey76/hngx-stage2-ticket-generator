const StepTwo = () => {
  return (
    <div className="flex flex-col justify-center sm:p-6 gap-8 bg-[#08252B] sm:border sm:border-[#0E464F] sm:rounded-[32px] flex-none self-stretch">
      <div
        className=" flex flex-col  p-6 pb-12 gap-2
  border-[2px] border-[#07373F] bg-[#052228] h-[328px]
   rounded-[24px]"
      >
        <p className="text-[#FAFAFA] text-[16px] leading-[150%] mb-[32px]">
          Upload Profile Photo
        </p>
        <div className="h-[200px] flex flex-row justify-center items-center sm:bg-black/20 ">
          <div className="w-full sm:w-[240px] h-[240px] flex flex-col justify-center items-center gap-4 bg-[#0E464F] border-4 border-[#24A0B5]/50 rounded-[32px] ">
            <input type="file" className="hidden" id="file-upload" />
            <img src="./upload.svg" alt="upload" />
            <label
              htmlFor="file-upload"
              className="w-[192px] cursor-pointer text-white text-center leading-[150%]"
            >
              Drag & drop or click to upload
            </label>
          </div>
        </div>
      </div>
      <div className=" h-[4px] bg-[#0E464F]"></div>
      <form className="flex flex-col gap-8">
        <div className="flex flex-col items-start gap-2">
          <label htmlFor="name" className="text-[#FAFAFA]">
            Enter your name
          </label>
          <input
            type="text"
            className="w-full p-[12px] gap-[8px] border border-[#07373F] rounded-[12px] bg-transparent"
          />
        </div>
        <div className="flex flex-col items-start gap-2">
          <label htmlFor="name" className="text-[#FAFAFA]">
            Enter your email *
          </label>
          <input
            type="email"
            className="w-full p-[12px] gap-[8px] border border-[#07373F] rounded-[12px] bg-transparent"
          />
        </div>
        <div className="flex flex-col items-start gap-2">
          <label htmlFor="name" className="text-[#FAFAFA]">
            Special request?
          </label>
          <textarea
            placeholder="Textarea"
            className="w-full h-[127px] p-[12px] gap-[8px] text-[#AAAAAA] border border-[#07373F] rounded-[12px] bg-transparent"
          />
        </div>
      </form>
      <div className="flex flex-col sm:flex-row gap-[16px]">
        <button className=" w-full   h-[48px] rounded-lg border border-[#24A0B5] text-[#24A0B5]">
          Back
        </button>

        <button className=" w-full h-[48px] bg-[#24A0B5] rounded-lg text-white">
          Get My Free Ticket
        </button>
      </div>
    </div>
  );
};

export default StepTwo;
