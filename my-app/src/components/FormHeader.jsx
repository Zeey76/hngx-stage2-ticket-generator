
const FormHeader = () => {
  return (
    <div className="flex flex-col p-0 gap-3 w-full justify-center">
        <div className="form-header flex  justify-between items-start flex-col gap-3">
          <p className="font-jeju form-header text-[24px] text-white">
            Ticket Selection
          </p>
          <p className="text-[16px] text-white font-roboto">Step 1/3</p>
        </div>
        <div className=" h-[4px] bg-[#0E464F] rounded-[5px]"></div>
      </div>
  )
}

export default FormHeader
