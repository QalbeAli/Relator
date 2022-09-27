import React from 'react'
import { Box, Grid, Typography } from "@mui/material"
import Loader from "../Loader/Index"
const LisitingQuality = () => {
    return (
        <>
            <Box pb={4}>
                <Grid container >
                    <Grid item xs={12} md={7}>
                        <Typography variant="body2">
                            <p className="font-bold">Listing Quality:</p> Good quality listings are shown higher in search results and get more leads. Complete as <br /> many fields as possible and add high resolution pictures for a higher ranking. Boost your <br /> rank further by  promoting the listing with silver or gold priority.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={5} >
                        {/* <Loader /> */}
                        <div className='w-full'>
                            <div className="flex justify-between mb-1">
                            </div>
                            <div class="w-full h-6 bg-gray-200 rounded-md dark:bg-gray-700">
                                <div class="h-6 bg-red-600 rounded-md dark:bg-red-500" style={{ width: "45%" }}></div>
                            </div>
                        </div>


                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default LisitingQuality;