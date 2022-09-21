import { Box, Container, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Images from "../../public/Images/images"

const listMap = [
    {
        image: Images.sale1,

    },
    {
        image: Images.house1,
    },
    {
        image: Images.house2,

    },
    {
        image: Images.house3,

    }
]

const List = () => {
    return (
        <>
            <Container maxWidth='xl'>
                <Box>
                    <Typography variant="h5" mt={8} ml={2} fontWeight="bold">
                        New Listings in Columbia, SC
                    </Typography>
                    <Typography variant="subtitle1" ml={2} color="blue" >
                        <Link href="/">
                            <a >
                                View All 145 New Listings
                            </a>
                        </Link>

                    </Typography>
                </Box>
                <Box className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4  ">
                    {
                        listMap.map((item, key) => (
                            <Box key={key}>
                                <Link href="/">
                                    <a class="block p-4 m-2 rounded-lg hover:scale-105 transition duration-300 border hover:shadow-lg shadow-indigo-100">
                                        <Image
                                            alt="Home"
                                            src={item.image}
                                            class="object-cover w-full  rounded-md"
                                        />

                                        <div class="mt-2">
                                            <dl>
                                                <div>
                                                    <dt className="sr-only">Price</dt>

                                                    <dd className="text-sm text-gray-500">$240,000</dd>
                                                </div>

                                                <div>
                                                    <dt className="sr-only">Address</dt>

                                                    <dd className="font-medium">123 Wallaby Avenue, Park Road</dd>
                                                </div>
                                            </dl>

                                            <dl className="flex items-center gap-8 mt-6 text-xs">
                                                <div className="sm:inline-flex sm:items-center sm:shrink-0">
                                                    <svg
                                                        className="w-4 h-4 text-indigo-700"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                                                        />
                                                    </svg>

                                                    <div className="sm:ml-3 mt-1.5 sm:mt-0">
                                                        <dt className="text-gray-500">Parking</dt>

                                                        <dd className="font-medium">2 spaces</dd>
                                                    </div>
                                                </div>

                                                <div className="sm:inline-flex sm:items-center sm:shrink-0">
                                                    <svg
                                                        className="w-4 h-4 text-indigo-700"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                    >
                                                        <path
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            stroke-width="2"
                                                            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                                                        />
                                                    </svg>

                                                    <div className="sm:ml-3 mt-1.5 sm:mt-0">
                                                        <dt className="text-gray-500">Bathroom</dt>

                                                        <dd className="font-medium">2 rooms</dd>
                                                    </div>
                                                </div>

                                                <div className="sm:inline-flex sm:items-center sm:shrink-0">
                                                    <svg
                                                        className="w-4 h-4 text-indigo-700"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                    >
                                                        <path
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            stroke-width="2"
                                                            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                                        />
                                                    </svg>

                                                    <div className="sm:ml-3 mt-1.5 sm:mt-0">
                                                        <dt className="text-gray-500">Bedroom</dt>

                                                        <dd className="font-medium">4 rooms</dd>
                                                    </div>
                                                </div>
                                            </dl>
                                        </div>
                                    </a>
                                </Link>
                            </Box>

                        ))
                    }

                </Box >
            </Container>
        </>
    )
}

export default List