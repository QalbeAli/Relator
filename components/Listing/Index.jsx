import { Box, Typography } from '@mui/material'
import React from 'react'

const LisitingHeading = () => {
    return (
        <>
            <Box>
                <Typography variant="h5">
                    Add a New Listing
                </Typography>
                <Typography variant="body2" py={2}>
                    My Properties / Add a New Listing
                </Typography>
            </Box>
        </>

    )
}

export default LisitingHeading