import React from 'react'

const Ticket = () => {
  return (
     <div className="flex flex-col p-[32px] items-center justify-center">
          <div className="ticket-box pb-[22px] w-[300px] h-[600px] flex flex-col items-center justify-center bg-[#072C31] border border-[#24A0B5]">
            <div className="h-[489px] w-full relative  z-10 ">
              <div className="mx-auto gap-[20px] mt-[20px] max-w-[260px] max-h-[446px] flex flex-col items-center p-[14px] bg-[rgba(3,30,33,0.1)] border border-[#24A0B5] backdrop-blur-[2px] rounded-[16px]">
                <div className="flex flex-col items-center">
                  <h2 className="text-white ">Techember Fest ”25</h2>
                  <p className="text-[10px] text-white mb-[4px]">
                    📍 04 Rumens road, Ikoyi, Lagos
                  </p>
                  <p className="text-[10px] text-white">
                    📅 March 15, 2025 | 7:00 PM
                  </p>
                </div>
                <div className="w-[140px] h-[140px] bg-[url('image.png')] border-4 border-[rgba(36,160,181,0.5)] rounded-[12px]"></div>
                <div className="grid grid-cols-2 p-1 w-[232px] h-[160px] bg-[#08343C] border border-[#133D44] rounded-[8px] ">
                  <div className="p-1 border-r border-b border-[#12464E]">
                    <p className=" text-[10px] mb-1 text-white opacity-30">
                      Enter your name
                    </p>
                    <p className="font-roboto font-bold text-[12px]  text-white">
                      Avi Chukwu
                    </p>
                  </div>
                  <div className="p-1 pl-2 border-b border-[#12464E]">
                    <p className=" text-[10px] mb-1 text-white opacity-30">
                      Enter your email *
                    </p>
                    <p className="font-roboto font-bold text-[12px]  text-white">
                      User@email.com
                    </p>
                  </div>
                  <div className="p-1 border-r border-b border-[#12464E]">
                    <p className=" text-[10px] mb-1 text-white opacity-30">
                      Ticket Type:
                    </p>
                    <p className="font-roboto text-[10px]  text-white">VIP</p>
                  </div>
                  <div className="p-1 pl-2 border-b border-[#12464E]">
                    <p className=" text-[10px] mb-1 text-white opacity-30">
                      Ticket For :
                    </p>
                    <p className="font-roboto text-[10px]  text-white">1</p>
                  </div>
                  <div className="p-1 col-span-2">
                    <p className=" text-[10px] mb-1 text-white opacity-30">
                      Special request?
                    </p>
                    <p className="font-roboto text-[10px]  text-white">
                      Nil ? Or the users sad story they write in there gets this
                      whole space, Max of three rows
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute w-[30px] h-[30px] cutout-circle rounded-full top-[-15px] z-0  left-[-15px]"></div>
            </div>
            <div className="w-full h-[109px] flex items-center justify-center">
              <img src="./barcode.gif" className="w-[236px] h-[68px] mx-auto" />
            </div>
          </div>
        </div>
  )
}

export default Ticket
