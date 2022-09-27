import React from 'react'
import { Box, Grid, Typography } from "@mui/material"
import Loader from "../Loader/Index"
const LisitingQuality = () => {
    return (
        <>
            <Box pb={4}>
                <Grid container >
                    <Grid item md={7}>
                        <Typography variant="body2">
                            <p className="font-bold">Listing Quality:</p> Good quality listings are shown higher in search results and get more leads. Complete as <br /> many fields as possible and add high resolution pictures for a higher ranking. Boost your <br /> rank further by  promoting the listing with silver or gold priority.
                        </Typography>
                    </Grid>
                    <Grid>
                        {/* <Loader /> */}
                        Loader
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default LisitingQuality;