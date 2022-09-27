import { Button } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
import YouTubeIcon from '@mui/icons-material/YouTube';
const Media = () => {
    return (
        <>
            <div className="bg-white shadow-md">
                <div className=" p-2 text-white font-semibold text-lg rounded-md bg-[#337ab7]">
                    Steap3-Media
                </div>
                <div className='m-2 p-4 rounded-md text-lg bg-[#d9edf7] '>
                    Adding price/picture gives 10x more leads. Also note listings with a price/image will be listed above those without.
                </div>
                <div className='shadow-lg h-[50vh] ' >
                    <Button variant="text" fontSize="8rem" className="p-12 m-6 border-2 bg-gray-100" component="label">
                        <AddIcon className="text-3xl" />
                        <input hidden accept="image/*" multiple type="file" />
                    </Button>
                </div>
            </div>
            <div className='flex justify-end items-center m-3'>
                <div>
                    <Button variant="text" className="  border-2 m-2 bg-gray-100" component="label">
                        <PhotoSizeSelectActualIcon className="m-1" /> Add Picture
                        <input hidden accept="image/*" multiple type="file" />
                    </Button>
                </div>
                <div>
                    <Button variant="text" className="  border-2 bg-gray-100" component="label">
                        <YouTubeIcon className="m-1" /> Add Youtube Video
                        <input hidden accept="image/*" multiple type="file" />
                    </Button>
                </div>
            </div>
        </>
    )
}

export default Media