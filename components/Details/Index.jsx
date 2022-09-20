import { Box, Container, Stack, Typography } from '@mui/material'
import React from 'react'

const Details = () => {
    return (
        <>
            <Container maxWidth="xl">
                <Box>
                    <Typography variant="h5" fontWeight="bold">
                        What's happening in Columbia, SC
                    </Typography>
                </Box>
                <Box className="flex justify-center items-center ">
                    <Stack direction="row" gap={20} py={8}>
                        <Box>
                            <Typography variant="subtitle1" fontSize="3rem" className="text-blue-500 text-center " >
                                877
                            </Typography>
                            <Typography variant="h5">
                                Homes for Sale
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="subtitle1" fontSize="3rem" className="text-blue-500 text-center " >
                                2
                            </Typography>
                            <Typography variant="h5">
                                Open Houses
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="subtitle1" fontSize="3rem" className="text-blue-500 text-center " >
                                3,405
                            </Typography>
                            <Typography variant="h5">
                                Recently Sold
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="subtitle1" fontSize="3rem" className="text-blue-500 text-center " >
                                232
                            </Typography>
                            <Typography variant="h5">
                                Price Reduced
                            </Typography>
                        </Box>
                    </Stack>
                </Box>
            </Container>
        </>
    )
}

export default Details