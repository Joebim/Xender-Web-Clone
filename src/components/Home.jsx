import React from 'react'
import { Link } from 'react-router-dom'
import homePhone from "../assets/images/home-phone.png"
import exportImg from "../assets/images/exportImg.svg"
import photo from "../assets/images/photo.svg"
import video from "../assets/images/video.svg"
import music from "../assets/images/music.svg"
import doc from "../assets/images/doc.svg"
import app from "../assets/images/app.svg"
import folder from "../assets/images/folder.svg"





export default function Home() {
  return (
    <>
    <div className="contain w-full pl-[65px] h-[91vh] bg-[#fafafa]">
      <div className="home-contain w-full h-full flex md:flex-row flex-col items-center md:items-start">
         <div className="pt-[75px]">
           <img src={homePhone} className="px-[50px] h-[380px]" alt="" />
           <div className="absolute flex flex-col justify-center items-center h-[120px] w-[130px] text-center top-[250px] left-[150px]">
            <img src={exportImg} className="h-[100px]" alt="" />
            <p className='m-[10px]'>Drag & drop to transfer</p>
           </div>
         </div>
         
         <div className="pt-[75px] w-[60%]">
            <div className="">
              <p className='text-[15px] text-[#888888]'><span className='text-[26px] text-black font-semibold pr-[15px]'>2201117TG</span>Android 12</p>
            </div>
            <div className="w-[70%] pt-[20px] flex flex-row justify-between">
              <div className="text-center">
                <div className="h-[100px] w-[100px] flex justify-center items-center rounded-full border-gray-300 border-[1px] bg-white">
                  <img src={photo} className="h-[35px]" alt="" />
                </div>
                <p>20</p>
              </div>
              
              <div className="text-center">
                <div className="h-[100px] w-[100px] flex justify-center items-center rounded-full border-gray-300 border-[1px] bg-white">
                <img src={video} className="h-[35px]" alt="" />
                </div>
                <p>20</p>
              </div>
              
              <div className="text-center">
                 <div className="h-[100px] w-[100px] flex justify-center items-center rounded-full border-gray-300 border-[1px] bg-white">
                 <img src={music} className="h-[35px]" alt="" />
                 </div>
                 <p>20</p>
              </div>
             
              <div className="text-center">
                <div className="h-[100px] w-[100px] flex justify-center items-center rounded-full border-gray-300 border-[1px] bg-white">
                <img src={doc} className="h-[35px]" alt="" />
                </div>
                <p>20</p>
              </div>
              
            </div>
            <div className="w-[35%] pt-[25px] flex flex-row justify-between">
            <div className="h-[100px] w-[100px] flex justify-center items-center rounded-full border-gray-300 border-[1px] bg-white">
            <img src={app} className="h-[35px]" alt="" />
            </div>
              <div className="h-[100px] w-[100px] flex justify-center items-center rounded-full border-gray-300 border-[1px] bg-white">
              <img src={folder} className="h-[35px]" alt="" />
              </div>
            </div>
            <div className="mt-[60px]">
              <div className="w-[90%] h-[20px] bg-slate-300 rounded-[30px] relative">
                <div className={`w-[77.24%] h-full rounded-[30px] bg-orange-400 `}>
                  <div className="absolute w-full h-[20px] flex justify-center items-center">
                     <p className='text-white text-[15px]'>Internal Storage: 78.98GB/120.25GB</p>
                  </div>
                  </div>
                
              </div>
            </div>
         </div>
      </div>
    </div>
    </>
  )
}


// 

// 2201117TGAndroid 12
// 2040
// 347
// 276
// 43
// 0

