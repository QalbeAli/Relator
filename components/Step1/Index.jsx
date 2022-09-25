import { Box, Grid, Typography, Button } from '@mui/material'
import React from 'react'

const Step1 = () => {
    return (
        <>
            <div className="border border-[#337ab7] rounded-lg my-3"  >
                <div className="bg-[#337ab7] rounded-md">
                    <h4 className="text-white p-2">
                        Step 1 - Categories
                    </h4>
                </div>
                <Box p={2}>
                    <Grid container>
                        <Grid item md={5}>
                            <Box>
                                <Typography variant="body1" className="my-3 font-bold">
                                    Listing Type
                                </Typography>
                            </Box>

                            <Box>
                                <ul class="flex ">
                                    <li>
                                        <input type="checkbox" id="react-option" value="" class="hidden peer" required="" />
                                        <label for="react-option" className="inline-flex justify-between items-center p-2  text-gray-500 bg-white rounded-md border-2 border-gray-200 cursor-pointer dark:hover:text-white dark:border-gray-700 peer-checked:bg-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-white hover:bg-gray-50 dark:text-white dark:bg-gray-800 dark:hover:bg-gray-700">
                                            <div class="block">

                                                <div class="w-full text-sm font-semibold">For Sale</div>
                                            </div>
                                        </label>
                                    </li>
                                    <li>
                                        <input type="checkbox" id="angular-option" value="" class="hidden peer" required="" />
                                        <label for="react-option" className="inline-flex justify-between items-center p-2  text-gray-500 bg-white rounded-md border-2 border-gray-200 cursor-pointer dark:hover:text-white dark:border-gray-700 peer-checked:bg-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-white hover:bg-gray-50 dark:text-white dark:bg-gray-800 dark:hover:bg-gray-700">
                                            <div class="block">

                                                <div class="w-full text-sm font-semibold">For Rent</div>
                                            </div>
                                        </label>
                                    </li>
                                </ul>
                            </Box>
                        </Grid>
                        <Grid item md={7}>
                            <h3 class="my-3 text-md  text-gray-900 font-bold dark:text-white">Category</h3>
                            <ul class="flex space-x-1">
                                <li>
                                    <input type="checkbox" id="react-option" value="" class="hidden peer" required="" />
                                    <label for="react-option" className="inline-flex justify-between items-center p-2  text-gray-500 bg-white rounded-md border-2 border-gray-200 cursor-pointer dark:hover:text-white dark:border-gray-700 peer-checked:bg-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-white hover:bg-gray-50 dark:text-white dark:bg-gray-800 dark:hover:bg-gray-700">
                                        <div class="block">

                                            <div class="w-full text-sm font-semibold">Commercial Property</div>
                                        </div>
                                    </label>
                                </li>
                                <li>
                                    <input type="checkbox" id="flowbite-option" value="" class="hidden peer" />
                                    <label for="flowbite-option" className="inline-flex justify-between items-center p-2  text-gray-500 bg-white rounded-md border-2 border-gray-200 cursor-pointer dark:hover:text-white dark:border-gray-700 peer-checked:bg-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-white hover:bg-gray-50 dark:text-white dark:bg-gray-800 dark:hover:bg-gray-700">
                                        <div class="block">

                                            <div class="w-full text-sm font-semibold">Warehouses & Factories</div>
                                        </div>
                                    </label>
                                </li>
                                <li>
                                    <input type="checkbox" id="angular-option" value="" class="hidden peer" />
                                    <label for="angular-option" className="inline-flex justify-between items-center p-2  text-gray-500 bg-white rounded-md border-2 border-gray-200 cursor-pointer dark:hover:text-white dark:border-gray-700 peer-checked:bg-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-white hover:bg-gray-50 dark:text-white dark:bg-gray-800 dark:hover:bg-gray-700">
                                        <div class="block">

                                            <div class="w-full text-sm font-semibold">Hotels & Lodges</div>
                                        </div>
                                    </label>
                                </li>
                                <li>
                                    <input type="checkbox" value="" class="hidden peer" />
                                    <label for="angular-option" className="inline-flex justify-between items-center p-2  text-gray-500 bg-white rounded-md border-2 border-gray-200 cursor-pointer dark:hover:text-white dark:border-gray-700 peer-checked:bg-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-white hover:bg-gray-50 dark:text-white dark:bg-gray-800 dark:hover:bg-gray-700">
                                        <div class="block">

                                            <div class="w-full text-sm font-semibold">Office</div>
                                        </div>
                                    </label>
                                </li>
                            </ul>
                            <ul class="flex space-x-1">
                                <li>
                                    <input type="checkbox" id="react-option" value="" class="hidden peer" required="" />
                                    <label for="react-option" className="inline-flex justify-between items-center p-2  text-gray-500 bg-white rounded-md border-2 border-gray-200 cursor-pointer dark:hover:text-white dark:border-gray-700 peer-checked:bg-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-white hover:bg-gray-50 dark:text-white dark:bg-gray-800 dark:hover:bg-gray-700">
                                        <div class="block">

                                            <div class="w-full text-sm font-semibold">Shops & Retail Property</div>
                                        </div>
                                    </label>
                                </li>
                            </ul>

                            <ul class="flex space-x-1 py-2">
                                <li>
                                    <input type="checkbox" id="react-option" value="" class="hidden peer" required="" />
                                    <label for="react-option" className="inline-flex justify-between items-center p-2  text-gray-500 bg-white rounded-md border-2 border-gray-200 cursor-pointer dark:hover:text-white dark:border-gray-700 peer-checked:bg-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-white hover:bg-gray-50 dark:text-white dark:bg-gray-800 dark:hover:bg-gray-700">
                                        <div class="block">

                                            <div class="w-full text-sm font-semibold">Commercial Property</div>
                                        </div>
                                    </label>
                                </li>
                                <li>
                                    <input type="checkbox" id="flowbite-option" value="" class="hidden peer" />
                                    <label for="flowbite-option" className="inline-flex justify-between items-center p-2  text-gray-500 bg-white rounded-md border-2 border-gray-200 cursor-pointer dark:hover:text-white dark:border-gray-700 peer-checked:bg-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-white hover:bg-gray-50 dark:text-white dark:bg-gray-800 dark:hover:bg-gray-700">
                                        <div class="block">

                                            <div class="w-full text-sm font-semibold">Warehouses & Factories</div>
                                        </div>
                                    </label>
                                </li>
                                <li>
                                    <input type="checkbox" id="angular-option" value="" class="hidden peer" />
                                    <label for="angular-option" className="inline-flex justify-between items-center p-2  text-gray-500 bg-white rounded-md border-2 border-gray-200 cursor-pointer dark:hover:text-white dark:border-gray-700 peer-checked:bg-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-white hover:bg-gray-50 dark:text-white dark:bg-gray-800 dark:hover:bg-gray-700">
                                        <div class="block">

                                            <div class="w-full text-sm font-semibold">Hotels & Lodges</div>
                                        </div>
                                    </label>
                                </li>

                            </ul>
                            <ul class="flex space-x-1 ">
                                <li>
                                    <input type="checkbox" id="react-option" value="" class="hidden peer" required="" />
                                    <label for="react-option" className="inline-flex justify-between items-center p-2  text-gray-500 bg-white rounded-md border-2 border-gray-200 cursor-pointer dark:hover:text-white dark:border-gray-700 peer-checked:bg-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-white hover:bg-gray-50 dark:text-white dark:bg-gray-800 dark:hover:bg-gray-700">
                                        <div class="block">

                                            <div class="w-full text-sm font-semibold">Houses</div>
                                        </div>
                                    </label>
                                </li>
                                <li>
                                    <input type="checkbox" id="flowbite-option" value="" class="hidden peer" />
                                    <label for="flowbite-option" className="inline-flex justify-between items-center p-2  text-gray-500 bg-white rounded-md border-2 border-gray-200 cursor-pointer dark:hover:text-white dark:border-gray-700 peer-checked:bg-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-white hover:bg-gray-50 dark:text-white dark:bg-gray-800 dark:hover:bg-gray-700">
                                        <div class="block">

                                            <div class="w-full text-sm font-semibold">Townhouses & Complexes</div>
                                        </div>
                                    </label>
                                </li>
                            </ul>

                            <ul class="flex space-x-1 py-2">
                                <li>
                                    <input type="checkbox" id="react-option" value="" class="hidden peer" required="" />
                                    <label for="react-option" className="inline-flex justify-between items-center p-2  text-gray-500 bg-white rounded-md border-2 border-gray-200 cursor-pointer dark:hover:text-white dark:border-gray-700 peer-checked:bg-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-white hover:bg-gray-50 dark:text-white dark:bg-gray-800 dark:hover:bg-gray-700">
                                        <div class="block">

                                            <div class="w-full text-sm font-semibold">Commercial Property</div>
                                        </div>
                                    </label>
                                </li>
                                <li>
                                    <input type="checkbox" id="flowbite-option" value="" class="hidden peer" />
                                    <label for="flowbite-option" className="inline-flex justify-between items-center p-2  text-gray-500 bg-white rounded-md border-2 border-gray-200 cursor-pointer dark:hover:text-white dark:border-gray-700 peer-checked:bg-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-white hover:bg-gray-50 dark:text-white dark:bg-gray-800 dark:hover:bg-gray-700">
                                        <div class="block">

                                            <div class="w-full text-sm font-semibold">Warehouses & Factories</div>
                                        </div>
                                    </label>
                                </li>
                                <li>
                                    <input type="checkbox" id="angular-option" value="" class="hidden peer" />
                                    <label for="angular-option" className="inline-flex justify-between items-center p-2  text-gray-500 bg-white rounded-md border-2 border-gray-200 cursor-pointer dark:hover:text-white dark:border-gray-700 peer-checked:bg-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-white hover:bg-gray-50 dark:text-white dark:bg-gray-800 dark:hover:bg-gray-700">
                                        <div class="block">

                                            <div class="w-full text-sm font-semibold">Hotels & Lodges</div>
                                        </div>
                                    </label>
                                </li>

                            </ul>

                        </Grid>
                    </Grid>

                </Box>

            </div>

        </>
    )
}

export default Step1








