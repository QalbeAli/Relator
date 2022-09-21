import { Box, Container } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import Images from "../../public/Images/images"
const EBook = () => {
    return (
        <>
            <Container>
                <Box>
                    <Image src={Images.ebook} alt="Ebook" />
                </Box>
            </Container>
        </>
    )
}

export default EBook