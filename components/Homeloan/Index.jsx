import { Box, Button, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import Images from "../../public/Images/images"
import SearchIcon from '@mui/icons-material/Search';

const Loan = () => {
    return (
        <>
            <Box>
                <Grid container className="hidden lg:flex">
                    <Grid item sx={12} md={6}>
                        <Box>
                            <Image src={Images.walk} alt="Something" />
                        </Box>
                    </Grid>
                    <Grid item sx={12} md={6}>
                        <Box className="flex items-center ml-10 h-full">
                            <div >

                                <Box>
                                    <Typography variant="h4" fontWeight="bold">
                                        Need a home loan? Get pre- approved
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography variant="h5" className="pt-2 pb-4">
                                        Find a lender who can offer competitive mortgage rates <br /> and help you with pre-approval.
                                    </Typography>
                                </Box>
                                <Box>
                                    <Button variant="contained" className="bg-red-600 hover:bg-red-700 rounded-full py-3 px-5 ">
                                        Get pre-approved now
                                    </Button>
                                </Box>
                            </div>

                        </Box>
                    </Grid>
                </Grid>
                <Grid container className="hidden lg:flex">
                    <Grid item sx={12} md={6}>
                        <Box className="flex items-center ml-10 h-full">
                            <div >

                                <Box>
                                    <Typography variant="h4" fontWeight="bold">
                                        Get a Local Info
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography variant="h5" className="pt-2 pb-4">
                                        Does it have pet-friendly rentals? How are the schools? Get important <br /> local information on the area you're most interested in.
                                    </Typography>
                                </Box>

                                <div className=" grow-1 bg-white rounded-full max-w-lg relative">
                                    <input type="text" placeholder='Address,City,Zip or Neighborhood' className=" font-xl  px-4 py-5 w-full  rounded-full bg-transparent p-3 border-gray-400 outline outline-gray-500" />
                                    <div className="rounded-full  bg-red-700 p-0 h-12 w-12 absolute  cursor-pointer right-2  flex items-center  justify-center top-1/2 -translate-y-1/2 text-white "><SearchIcon /></div>

                                </div>
                            </div>

                        </Box>
                    </Grid>
                    <Grid item sx={12} md={6}>
                        <Box>
                            <Image src={Images.sit} alt="Something" />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Loan