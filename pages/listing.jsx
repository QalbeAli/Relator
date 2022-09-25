import React from 'react'
import { Container } from '@mui/material'
import LisitingHeading from '../components/Listing/Index'
import HorizontalNonLinearStepper from '../components/Stepper/Index'
import LisitingQuality from '../components/Listing-Quality/Index'
import Form from '../components/Form/Index'
import FormButton from '../components/FormButtons/Index'
import Details from '../components/Step2/Index'

const listing = () => {
    return (
        <>
            <Container>
                <LisitingHeading />
                {/* <HorizontalNonLinearStepper /> */}
                <LisitingQuality />
                {/* <Form /> */}
                <Details />
                <FormButton />
            </Container>
        </>
    )
}

export default listing