import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import images from "../../public/Images/images";
import SearchIcon from '@mui/icons-material/Search';


const linkMap = [
  {
    title: 'BUY',
    link: '/'
  },
  {
    title: 'RENT',
    link: '/'
  },
  {
    title: 'SELL',
    link: '/'
  },
  {
    title: 'PRE-APPROVAL',
    link: '/'
  },
  {
    title: 'JUST SOLD',
    link: '/'
  },
  {
    title: 'HOME VALUE',
    link: '/'
  },

]
const Hero = () => {
  return (
    <>
      <div style={{
        backgroundImage: `url(Images/main.png)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
      }} className='h-[50vh] bg-red-600 flex justify-center items-center'>
        <div className="w-full text-center max-w-xl  mx-auto ">
          <Typography fontSize="30px" fontWeight="bold" className="text-white ">  To each their home.℠</Typography>
          <p className="mt-2 mb-10 text-2xl text-white">Let’s find a home that’s perfect for you</p>
          <ul className="flex   justify-center  text-sm text-white">
            {linkMap.map((item, key) => (
              <Link href={item.link}>
                <li className=" whitespace-nowrap cursor-pointer px-3 py-2 border-2 border-transparent hover:border-b-red-600 transition duration-300">
                  <a>{item.title}</a>
                </li>
              </Link>
            ))}

          </ul>
          <div className="max-w-lg mx-auto mt-3">

            <div className="flex grow-1 bg-white rounded-full max-w-full relative">
              <input type="text" name="" id="" className=" px-4 py-5 w-full rounded-full bg-transparent p-3 border-none outline-none" />
              <div className="rounded-full  bg-red-700 p-0 h-12 w-12 absolute right-2 cursor-pointer flex items-center  justify-center top-1/2 -translate-y-1/2 text-white "><SearchIcon /></div>

            </div>
          </div>
        </div>



      </div>
    </>
  );
};

export default Hero;
