import { Box, Typography } from '@mui/material'
import React from 'react'

const ReadMore = () => {
    return (
        <>
            <Box
                style={{
                    backgroundImage: `url(images/read.jpg)`
                }}
            >
                <Box>
                    <Typography variant="subtitle1" className="text-white">
                        Trends
                    </Typography>
                    <Typography variant="subtitle1" className="text-white">
                        An Affordable Midcentury Modern Gem in Kansas <br /> Is the Week’s Most Popular Home
                    </Typography>
                </Box>
            </Box>
        </>
    )
}

export default ReadMore