import { Box, Button, Container, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import Images from "../../public/Images/images"
const Explore = () => {
    return (
        <>
            <Container maxWidth="xl">
                {/* <Box className='my-12 h-[28vh] bg-[#F7F7F7]' style={{
                    backgroundImage: `url(Images/cut.jpg)`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right",
                    backgroundSize: "contain"
                }}>
                    <div className="p-12 ">
                        <Typography variant="h4" fontWeight="bold">Let’s find the right selling option for you</Typography>
                        <Typography variant="subtitle1">Get your home’s value and see selling options</Typography>
                        <Button variant="contained" className="bg-red-500 rounded-3xl mt-4" > Start exploring</Button>
                    </div>
                </Box> */}

                <Grid container my={6} >
                    <Grid item xs={12} md={6} className="-order-1">
                        <Box className=' bg-[#F7F7F7]'>
                            <div className="p-12 ">
                                <Typography variant="h4" fontWeight="bold">Let’s find the right selling option for you</Typography>
                                <Typography variant="subtitle1">Get your home’s value and see selling options</Typography>
                                <Button variant="contained" className="bg-red-500 rounded-3xl mt-4" > Start exploring</Button>
                            </div>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} className="order-2">
                        <Box >
                            <Image src={Images.cut} />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Explore