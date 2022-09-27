import React, { useState } from 'react'
import Category from './Steps/Category/Index'
import FormButton from './FormButtons/Index'
import Stepper from './Stepper/Index'
import Media from './Steps/Media/Index'
import { StepperContext } from './StepperContext/StepperContext'
import Detail from './Steps/Detail/Index'
const Index = () => {

    const [currentStep, setCurrentStep] = useState(1)

    const steps = [
        "Category",
        "Details",
        "Media"
    ]


    const displayStep = (step) => {
        switch (step) {
            case 1:
                return <Category />
            case 2:
                return <Detail />
            case 3:
                return <Media />
        }
    }

    const handleClick = (direction) => {
        let newStep = currentStep

        direction === "next" ? newStep++ : newStep--

        newStep > 0 && newStep <= steps.length && setCurrentStep(newStep)
    }

    return (
        <>
            {/* Display The Steppers */}
            <Stepper steps={steps} currentStep={currentStep} />


            {/* Display Components */}

            <div>
                <StepperContext.Provider value={{}}>
                    {displayStep(currentStep)}
                </StepperContext.Provider>
            </div>

            {/* Stepper Buttons */}
            <FormButton handleClick={handleClick} currentStep={currentStep} steps={steps} />
        </>

    )
}

export default Index