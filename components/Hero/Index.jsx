import { Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import images from "../../public/Images/images";

const Hero = () => {
  return (
    <>
      <div style={{
        backgroundImage: `url(Images/main.png)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}>
        <Typography variant="h3" fontWeight="bold" className="text-white text-center pt-[8rem]">
          To each their home
        </Typography>
      </div>
    </>
  );
};

export default Hero;
