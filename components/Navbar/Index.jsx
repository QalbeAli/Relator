import Image from 'next/image'
import React from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { Button } from "@mui/material"
import Images from "../../public/Images/images"
import Link from 'next/link'
import dayjs, { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const Navbar = () => {


    const [value, setValue] = useState();

    let [isOpen, setIsOpen] = useState(false)

    let [isOpen2, setIsOpen2] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    function closeModal2() {
        setIsOpen2(false)
    }

    function openModal2() {
        setIsOpen2(true)
    }
    return (
        <>

            <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <a href="https://flowbite.com/" className="flex items-center">
                        {/* <Image src="https://flowbite.com/docs/images/logo.svg" layout='fill' className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" /> */}

                    </a>
                    <div className="flex md:order-2 space-x-4">
                        <button onClick={openModal} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
                        <button onClick={openModal2} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign Up</button>


                        <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>
                    <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                        <ul className="flex  flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-4 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li className="text-xl">
                                <Link href="#">
                                    <a className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0  dark:text-white" aria-current="page">For Rent |</a>

                                </Link>
                            </li>

                            <li className="text-xl">
                                <Link href="#">
                                    <a className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">For Sale |</a>

                                </Link>
                            </li>
                            <li className="text-xl">
                                <Link href="/listing">
                                    <a className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">List Property |</a>

                                </Link>
                            </li>
                            <li className="text-xl">
                                <Link href="#">
                                    <a className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


            {/* Login Starts Here */}

            <>


                <Transition appear show={isOpen} as={Fragment}>
                    <Dialog as="div" className="relative z-10" onClose={closeModal}>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-black bg-opacity-25" />
                        </Transition.Child>

                        <div className="fixed inset-0 overflow-y-auto">
                            <div className="flex min-h-full items-center justify-center p-4 text-center">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0 scale-95"
                                    enterTo="opacity-100 scale-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100 scale-100"
                                    leaveTo="opacity-0 scale-95"
                                >
                                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                        <Dialog.Title
                                            as="h3"
                                            className="text-lg font-medium leading-6 text-gray-900"
                                        >
                                            Login Form
                                        </Dialog.Title>
                                        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                                            <div className="w-full max-w-md space-y-8">
                                                <div>
                                                    {/* <img
                                                            className="mx-auto h-12 w-auto"
                                                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                                            alt="Your Company"
                                                        /> */}
                                                    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                                                        Sign in to your account
                                                    </h2>

                                                </div>
                                                <form className="mt-8 space-y-6" action="#" method="POST">
                                                    <input type="hidden" name="remember" defaultValue="true" />
                                                    <div className="-space-y-px rounded-md shadow-sm">
                                                        <div>
                                                            <label htmlFor="email-address" className="sr-only">
                                                                Email address
                                                            </label>
                                                            <input
                                                                id="email-address"
                                                                name="email"
                                                                type="email"
                                                                autoComplete="email"
                                                                required
                                                                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                                placeholder="Email address"
                                                            />
                                                        </div>
                                                        <div>
                                                            <label htmlFor="password" className="sr-only">
                                                                Password
                                                            </label>
                                                            <input
                                                                id="password"
                                                                name="password"
                                                                type="password"
                                                                autoComplete="current-password"
                                                                required
                                                                className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                                placeholder="Password"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="flex items-center justify-between">
                                                        <div className="flex items-center">
                                                            <input
                                                                id="remember-me"
                                                                name="remember-me"
                                                                type="checkbox"
                                                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                            />
                                                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                                                Remember me
                                                            </label>
                                                        </div>

                                                        <div className="text-sm">
                                                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                                                Forgot your password?
                                                            </a>
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <button
                                                            type="submit"
                                                            className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                                        >
                                                            {/* <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                                                    <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                                                                </span> */}
                                                            Sign in
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>


                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </Dialog>
                </Transition>
            </>


            {/* Sign Up Form Starts Here */}


            <Transition appear show={isOpen2} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal2}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        Sign Up Form
                                    </Dialog.Title>
                                    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                                        <div className="w-full max-w-md space-y-8">
                                            <div>
                                                {/* <img
                                                            className="mx-auto h-12 w-auto"
                                                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                                            alt="Your Company"
                                                        /> */}
                                                <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                                                    Create your account
                                                </h2>

                                            </div>
                                            {/* Here to add */}
                                            <div className="flex justify-center items-center">
                                                <form className="w-full max-w-lg">
                                                    <div className="flex flex-wrap -mx-3 mb-6">
                                                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                                                First Name
                                                            </label>
                                                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border      rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
                                                        </div>
                                                        <div className="w-full md:w-1/2 px-3">
                                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                                                Last Name
                                                            </label>
                                                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
                                                        </div>
                                                    </div>

                                                    <div className="flex flex-wrap -mx-3 mb-2">

                                                        {/* Here is the Date picker */}
                                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                            <DatePicker
                                                                label="Date of Birth"
                                                                value={value}
                                                                onChange={(newValue) => {
                                                                    setValue(newValue);
                                                                }}
                                                                renderInput={(params) => <TextField {...params} />}
                                                            />
                                                        </LocalizationProvider>


                                                        <div className="flex  py-6 ">
                                                            <div className="w-full px-3">
                                                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"  >
                                                                    Phone No
                                                                </label>
                                                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" placeholder="Phone No" />
                                                            </div>
                                                            <div className="w-full md:w-1/2.5 px-3 mb-6 md:mb-0">
                                                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                                                                    Role
                                                                </label>
                                                                <div className="relative">
                                                                    <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                                                        <option>Owner</option>
                                                                        <option>Agent</option>

                                                                    </select>
                                                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="w-full ">
                                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                                            Email
                                                        </label>
                                                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="string" placeholder="Admin" />
                                                    </div>
                                                    <div className="w-full ">
                                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                                            Password
                                                        </label>
                                                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="string" placeholder="Admin" />
                                                    </div>
                                                    <div className="w-full">
                                                        <Button variant="contained" className="w-full bg-blue-700">
                                                            Sign Up
                                                        </Button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>


                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>






        </>
    )
}

export default Navbar