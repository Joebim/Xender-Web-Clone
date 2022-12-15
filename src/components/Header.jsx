import React from 'react'
import power from "../assets/images/power.svg"
import loop from "../assets/images/loop.svg"

export default function Header() {
  return (
   <>
     <div className="header pl-[65px] w-full h-[55px] bg-[#fafafa] flex justify-between">
     <div className="h-full"></div>
     <div className="h-full flex flex-row justify-center items-center pr-[20px]">
        <img src={loop} className="h-[20px] px-[10px]" alt="" />
        <img src={power} className="h-[20px] px-[10px]" alt="" />

     </div>
     </div>
     <hr />
   </>
  )
}
