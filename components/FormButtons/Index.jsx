import { Button } from '@mui/material'
import React from 'react'

const FormButton = () => {
    return (
        <>
            <div className="flex justify-between items-center py-6">
                <Button variant="contained" className="hover:bg-red-500 bg-red-500">Cancel</Button>
                <Button variant="contained" className="hover:bg-blue-600 bg-blue-600">Next</Button>
            </div>
        </>
    )
}

export default FormButton