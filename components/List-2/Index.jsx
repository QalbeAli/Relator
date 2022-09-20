import { Box, Container } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import Images from "../../public/Images/images"

const List2 = () => {
    return (
        <>
            <Container maxWidth="xl">

                <Box className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 my-12  ">
                    {
                        [1, 2, 3, 4].map((item, key) => {
                            return (
                                <a href="#" class="block p-4 m-2 rounded-lg hover:scale-105 transition duration-300 border hover:shadow-lg shadow-indigo-100">
                                    <Image
                                        alt="Home"
                                        src={Images.trend}

                                    />
                                    <div class="mt-2">
                                        <dl>
                                            <div>

                                                <dd className="text-sm text-gray-500">Will Home Prices Drop? Will Mortgage Rates Rise? What To Expect in the Fall...</dd>
                                            </div>

                                        </dl>


                                    </div>
                                </a>
                            )
                        })
                    }

                </Box>
            </Container>
        </>
    )
}

export default List2