import { Button } from '@mui/material'
import React from 'react'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


const FormButton = ({ handleClick, currentStep, steps }) => {

    return (
        <>
            <div className="flex justify-between items-center py-6">

                <div>
                    <Button
                        onClick={() => handleClick()}
                        variant="contained" className={`hover:bg-red-500 bg-red-500 ${currentStep === 1 ? "opacity-50 cursor-not-allowed" : ""} `}>Back</Button>
                </div>
                <div >
                    <Button
                        onClick={() => handleClick("next")}
                        variant="contained" className="hover:bg-blue-600 bg-blue-600">
                        {currentStep === steps.length ? "Confirm" : "Next"}
                    </Button>
                </div>
            </div>
        </>
    )
}

export default FormButton