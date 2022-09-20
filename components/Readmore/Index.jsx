import { Box, Button, Typography } from '@mui/material'
import React from 'react'

const ReadMore = () => {
    return (
        <>
            <Box
                style={{
                    backgroundImage: `url(images/read.jpg)`,
                    backgroundPosition: "center",
                    backgroundSize: "100% 100%",
                    backgroundRepeat: "no-repeat",


                }}
                className=" my-8  opacity-90"
            >
                <Box className=" h-[60vh] flex items-center justify-center" style={{
                    backgroundColor: "rgba(0, 0, 0,0.6)"
                }}>

                    <Box className="w-full text-left md:text-center max-w-xl  mx-auto">
                        <Typography variant="subtitle1" fontWeight="bold" className="text-white ">
                            Trends
                        </Typography>
                        <Typography variant="h5" py={5} fontWeight="bold" className="text-white">
                            An Affordable Midcentury Modern Gem in Kansas <br /> Is the Week’s Most Popular Home
                        </Typography>
                        <Button sx={{
                            "&:hover": {
                                borderColor: "white"
                            }
                        }} variant="outlined" className="text-white border border-white color-white rounded-full px-5 ">
                            Get pre
                        </Button>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default ReadMore