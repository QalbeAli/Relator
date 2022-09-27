import React from 'react'
import { Container } from '@mui/material'
import LisitingHeading from '../components/Listing/Index'
import LisitingQuality from '../components/Listing-Quality/Index'
import Form from '../components/Form/Index'

const listing = () => {
    return (
        <>
            <Container>
                <LisitingHeading />
                <LisitingQuality />
                <Form />
            </Container>
        </>
    )
}

export default listing