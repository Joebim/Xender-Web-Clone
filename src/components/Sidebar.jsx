import React from 'react'
import xender from "../assets/images/logo.png"
import {ReactComponent as Home} from '../assets/images/home.svg'
import {ReactComponent as ImageSide} from "../assets/images/image-side.svg"
import {ReactComponent as VideoSide} from "../assets/images/video-side.svg"
import {ReactComponent as MusicSide} from "../assets/images/music-side.svg"
import {ReactComponent as DocSide} from "../assets/images/doc-side.svg"
import {ReactComponent as AppSide} from "../assets/images/app-side.svg"
import {ReactComponent as FolderSide} from "../assets/images/folder-side.svg"
import { Link } from 'react-router-dom'

export default function Sidebar() {

  return (
    <>
        <div className="side-bar w-[65px] h-full bg-black absolute top-0 left-0">
            <div className="logo m-[13px]">
                <img src={xender} alt="" width="37" height="36"></img>
            </div>

            <div className="nav-module w-full">
              <Link to="/">
              <li id="homeModule" className='group h-[60px] w-full flex flex-row justify-center items-center bg-black ease duration-500 hover:w-[140px]'>
                <div className="p-[16px] h-full w-[65px] flex">
                    <Home className="w-[63px] stroke-[#666] group-hover:stroke-white"/>
                </div>
                  {/* <img src={home} className="p-[16px] w-[63px] stroke-white fill-white" alt="" /> */}
                  <div className="h-[60px] bg-black overflow-hidden w-[60px] flex items-center text-center">
                    <p className='text-white pl-1 text-[13px]'>Home</p>
                  </div>
                </li>
              </Link>
                
                <Link to="/images">
                <li id="imgModule" className='group h-[60px] w-full flex flex-row justify-center items-center bg-black ease duration-500 hover:w-[140px]'>
                <div className="p-[16px] h-full w-[65px] flex">
                    <ImageSide className="w-[63px] stroke-[#666] group-hover:stroke-white"/>
                </div>
                  {/* <img src={imageSide} className="p-[16px] w-[63px]" alt="" /> */}
                  <div className="h-[60px] bg-black overflow-hidden w-[60px] flex items-center text-center">
                    <p className='text-white pl-1 text-[13px]'>Images</p>
                  </div>
                </li>
                </Link>
                
                <Link to="/videos">
                <li id="vidModule" className='group h-[60px] w-full flex flex-row justify-center items-center bg-black ease duration-500 hover:w-[140px]'>
                <div className="p-[16px] h-full w-[65px] flex">
                    <VideoSide className="w-[63px] stroke-[#666] group-hover:stroke-white"/>
                </div>
                  {/* <img src={videoSide} className="p-[16px] w-[63px]" alt="" /> */}
                  <div className="h-[60px] bg-black overflow-hidden w-[60px] flex items-center text-center">
                    <p className='text-white pl-1 text-[13px]'>Videos</p>
                  </div>
                </li>
                </Link>
                
                <Link to="/music">
                <li id="musicModule" className='group h-[60px] w-full flex flex-row justify-center items-center bg-black ease duration-500 hover:w-[140px]'>
                <div className="p-[16px] h-full w-[65px] flex">
                    <MusicSide className="w-[63px] stroke-[#666] group-hover:stroke-white"/>
                </div>
                  {/* <img src={musicSide} className="p-[16px] w-[63px]" alt="" /> */}
                  <div className="h-[60px] bg-black overflow-hidden w-[60px] flex items-center text-center">
                    <p className='text-white pl-1 text-[13px]'>Music</p>
                  </div>
                </li>
                </Link>
                
                <Link to="/documents">
                <li id="docModule" className='group h-[60px] w-full flex flex-row justify-center items-center bg-black ease duration-500 hover:w-[140px]'>
                <div className="p-[16px] h-full w-[65px] flex">
                    <DocSide className="w-[63px] stroke-[#666] group-hover:stroke-white"/>
                </div>
                  {/* <img src={docSide} className="p-[16px] w-[63px]" alt="" /> */}
                  <div className="h-[60px] bg-black overflow-hidden w-[60px] flex items-center text-center">
                    <p className='text-white pl-1 text-[11px]'>Documents</p>
                  </div>
                </li>
                </Link>
                
                <Link to="/apps">
                <li id="appModule" className='group h-[60px] w-full flex flex-row justify-center items-center bg-black ease duration-500 hover:w-[140px]'>
                <div className="p-[16px] h-full w-[65px] flex">
                    <AppSide className="w-[63px] stroke-[#666] group-hover:stroke-white"/>
                </div>
                  {/* <img src={appSide} className="p-[16px] w-[63px]" alt="" /> */}
                  <div className="h-[60px] bg-black overflow-hidden w-[60px] flex items-center text-center">
                    <p className='text-white pl-1 text-[13px]'>Apps</p>
                  </div>
                </li>
                </Link>
                
                <Link to="/files">
                <li id="fileModule" className='group h-[60px] w-full flex flex-row justify-center items-center bg-black ease duration-500 hover:w-[120px]'>
                <div className="p-[16px] h-full w-[65px] flex">
                    <FolderSide className="w-[63px] stroke-[#666] group-hover:stroke-white"/>
                </div>
                  {/* <img src={folderSide} className="p-[16px] w-[63px]" alt="" /> */}
                  <div className="h-[60px] bg-black overflow-hidden w-[60px] flex items-center text-center">
                    <p className='text-white pl-1 text-[13px]'>Files</p>
                  </div>
                </li>
                </Link>
                
            </div>

        </div>


    {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script> */}
    </>
  )
}
