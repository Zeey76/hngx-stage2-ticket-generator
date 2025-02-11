
const FormHeader = () => {
  return (
    <div className="flex flex-col p-0 gap-3 w-full justify-center">
        <div className="form-header flex  justify-between items-start flex-col gap-3">
          <h2 className="form-header text-[24px] text-white">
            Ticket Selection
          </h2>
          <p className="text-[16px] text-white">Step 1/3</p>
        </div>
        <div className=" h-[4px] bg-[#0E464F] rounded-[5px]"></div>
      </div>
  )
}

export default FormHeader
