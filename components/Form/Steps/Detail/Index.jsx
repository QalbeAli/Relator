import React from 'react'
import { Disclosure } from '@headlessui/react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Button } from '@mui/material';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { Fragment, useState } from 'react'
import { Listbox, Transition, Combobox } from '@headlessui/react'
import DoneIcon from '@mui/icons-material/Done';

const people = [
    { name: 'Square Meters' },
    { name: 'Hectares' },
    { name: 'Acres' },
    { name: 'Perches' },
    { name: 'Square Feet' },
]

const people2 = [
    { id: 1, name: 'Wade Cooper' },
    { id: 2, name: 'Arlene Mccoy' },
    { id: 3, name: 'Devon Webb' },
    { id: 4, name: 'Tom Cook' },
    { id: 5, name: 'Tanya Fox' },
    { id: 6, name: 'Hellen Schmidt' },
]

const Detail = () => {
    const [selected, setSelected] = useState(people[0])

    // const [selected2, setSelected2] = useState(people[0])
    const [query, setQuery] = useState('')

    const filteredPeople =
        query === ''
            ? people
            : people.filter((person) =>
                person.name
                    .toLowerCase()
                    .replace(/\s+/g, '')
                    .includes(query.toLowerCase().replace(/\s+/g, ''))
            )
    return (
        <>
            <div className="rounded-lg my-3"  >
                <div >
                    <div className="   rounded-2xl bg-white ">
                        <Disclosure className="w-full">
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-[#337ab7] px-4 py-2 text-left text-sm font-medium text-white  focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                        <span>What is your refund policy?</span>
                                        <KeyboardArrowDownIcon
                                            className={`${open ? 'rotate-180 transform' : ''
                                                } h-5 w-5 text-white`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="  my-2 text-sm  text-gray-500">
                                        <div className=" px-4 py-1 bg-[#d9edf7] rounded-md">
                                            You selected Commercial Property, Warehouses & Factories for Sale.
                                            <Button variant="contained" className="bg-white hover:bg-gray-100 m-2 text-gray-500">
                                                <BorderColorIcon className="p-1" /> Change
                                            </Button>
                                        </div>
                                        <div className="my-2">
                                            <label htmlFor="input" className="font-bold" aria-required  >
                                                Heading
                                            </label>
                                            <input type="text" className="w-full border-2 my-2 py-1 rounded-md border-gray-200 hover:outline-none outline-none hover:shadow-lg " />
                                        </div>
                                        <div className="my-2">
                                            <label htmlFor="input" className="font-bold" aria-required  >
                                                Description
                                            </label>
                                            <textarea type="text" className="w-full border-2 my-2 rounded-md  border-gray-200 hover:outline-none outline-none  " />
                                        </div>

                                        <div className="grid grid-cols-5 gap-12">
                                            <div className='flex flex-col'>
                                                <label htmlFor="Price">Price</label>
                                                <input placeholder='US$' type="text" className='outline-none border border-gray-400 p-1 rounded-md' />
                                            </div>
                                            <div>
                                                <div className=" mt-3">
                                                    <Listbox value={selected} onChange={setSelected}>
                                                        <div className="">
                                                            <Listbox.Button className="relative border mt-1 border-gray-300 w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                                                                <span className="block ">{selected.name}</span>

                                                            </Listbox.Button>
                                                            <Transition
                                                                as={Fragment}
                                                                leave="transition ease-in duration-100"
                                                                leaveFrom="opacity-100"
                                                                leaveTo="opacity-0"
                                                            >
                                                                <Listbox.Options className=" mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                                    {people.map((person, personIdx) => (
                                                                        <Listbox.Option
                                                                            key={personIdx}
                                                                            className={({ active }) =>
                                                                                `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                                                                                }`
                                                                            }
                                                                            value={person}
                                                                        >
                                                                            {({ selected }) => (
                                                                                <>
                                                                                    <span
                                                                                        className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                                                            }`}
                                                                                    >
                                                                                        {person.name}
                                                                                    </span>
                                                                                    {selected ? (
                                                                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                                                                            <DoneIcon className="h-5 w-5" aria-hidden="true" />
                                                                                        </span>
                                                                                    ) : null}
                                                                                </>
                                                                            )}
                                                                        </Listbox.Option>
                                                                    ))}
                                                                </Listbox.Options>
                                                            </Transition>
                                                        </div>
                                                    </Listbox>
                                                </div>
                                            </div>
                                            <div className='flex flex-col'>
                                                <label htmlFor="Price">Total Land Area </label>
                                                <input type="text" placeholder='m2' className='outline-none border border-gray-400 p-1 rounded-md' />
                                            </div>
                                            <div>
                                                <div className=" mt-3">
                                                    <Listbox value={selected} onChange={setSelected}>
                                                        <div className="">
                                                            <Listbox.Button className="relative border mt-1 border-gray-300 w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                                                                <span className="block ">{selected.name}</span>

                                                            </Listbox.Button>
                                                            <Transition
                                                                as={Fragment}
                                                                leave="transition ease-in duration-100"
                                                                leaveFrom="opacity-100"
                                                                leaveTo="opacity-0"
                                                            >
                                                                <Listbox.Options className=" mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                                    {people.map((person, personIdx) => (
                                                                        <Listbox.Option
                                                                            key={personIdx}
                                                                            className={({ active }) =>
                                                                                `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                                                                                }`
                                                                            }
                                                                            value={person}
                                                                        >
                                                                            {({ selected }) => (
                                                                                <>
                                                                                    <span
                                                                                        className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                                                            }`}
                                                                                    >
                                                                                        {person.name}
                                                                                    </span>
                                                                                    {selected ? (
                                                                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                                                                            <DoneIcon className="h-5 w-5" aria-hidden="true" />
                                                                                        </span>
                                                                                    ) : null}
                                                                                </>
                                                                            )}
                                                                        </Listbox.Option>
                                                                    ))}
                                                                </Listbox.Options>
                                                            </Transition>
                                                        </div>
                                                    </Listbox>
                                                </div>
                                            </div>
                                            <div className='flex flex-col'>
                                                <label htmlFor="Price">Total Building Area </label>
                                                <input type="text" placeholder='m2' className='outline-none border border-gray-400 p-1 rounded-md' />
                                            </div>
                                        </div>

                                        <div>

                                            <label className="font-bold py-1">
                                                Property Title Type
                                            </label>
                                            <ul class="flex space-x-1 ">
                                                <li>
                                                    <input type="checkbox" id="react-option" value="" class="hidden peer" required="" />
                                                    <label for="react-option" className="inline-flex justify-between items-center p-2  text-gray-500 bg-white rounded-md border-2 border-gray-200 cursor-pointer dark:hover:text-white dark:border-gray-700 peer-checked:bg-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-white hover:bg-gray-50 dark:text-white dark:bg-gray-800 dark:hover:bg-gray-700">
                                                        <div class="block">

                                                            <div class="w-full text-sm font-semibold">Full Title Deeds </div>
                                                        </div>
                                                    </label>
                                                </li>
                                                <li>
                                                    <input type="checkbox" id="angular-option" value="" class="hidden peer" required="" />
                                                    <label for="react-option" className="inline-flex justify-between items-center p-2  text-gray-500 bg-white rounded-md border-2 border-gray-200 cursor-pointer dark:hover:text-white dark:border-gray-700 peer-checked:bg-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-white hover:bg-gray-50 dark:text-white dark:bg-gray-800 dark:hover:bg-gray-700">
                                                        <div class="block">

                                                            <div class="w-full text-sm font-semibold">Sectional Title Deeds</div>
                                                        </div>
                                                    </label>
                                                </li>
                                                <li>
                                                    <input type="checkbox" id="angular-option" value="" class="hidden peer" required="" />
                                                    <label for="react-option" className="inline-flex justify-between items-center p-2  text-gray-500 bg-white rounded-md border-2 border-gray-200 cursor-pointer dark:hover:text-white dark:border-gray-700 peer-checked:bg-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-white hover:bg-gray-50 dark:text-white dark:bg-gray-800 dark:hover:bg-gray-700">
                                                        <div class="block">

                                                            <div class="w-full text-sm font-semibold">Cession</div>
                                                        </div>
                                                    </label>
                                                </li>
                                                <li>
                                                    <input type="checkbox" id="angular-option" value="" class="hidden peer" required="" />
                                                    <label for="react-option" className="inline-flex justify-between items-center p-2  text-gray-500 bg-white rounded-md border-2 border-gray-200 cursor-pointer dark:hover:text-white dark:border-gray-700 peer-checked:bg-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-white hover:bg-gray-50 dark:text-white dark:bg-gray-800 dark:hover:bg-gray-700">
                                                        <div class="block">

                                                            <div class="w-full text-sm font-semibold">Cessions of Trust</div>
                                                        </div>
                                                    </label>
                                                </li>
                                                <li>
                                                    <input type="checkbox" id="angular-option" value="" class="hidden peer" required="" />
                                                    <label for="react-option" className="inline-flex justify-between items-center p-2  text-gray-500 bg-white rounded-md border-2 border-gray-200 cursor-pointer dark:hover:text-white dark:border-gray-700 peer-checked:bg-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-white hover:bg-gray-50 dark:text-white dark:bg-gray-800 dark:hover:bg-gray-700">
                                                        <div class="block">

                                                            <div class="w-full text-sm font-semibold">Share Block</div>
                                                        </div>
                                                    </label>
                                                </li>
                                                <li>
                                                    <input type="checkbox" id="angular-option" value="" class="hidden peer" required="" />
                                                    <label for="react-option" className="inline-flex justify-between items-center p-2  text-gray-500 bg-white rounded-md border-2 border-gray-200 cursor-pointer dark:hover:text-white dark:border-gray-700 peer-checked:bg-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-white hover:bg-gray-50 dark:text-white dark:bg-gray-800 dark:hover:bg-gray-700">
                                                        <div class="block">

                                                            <div class="w-full text-sm font-semibold">Share Transfer</div>
                                                        </div>
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="grid grid-cols-3 gap-3">
                                            <div>
                                                <div className=" w-72">
                                                    <Combobox value={selected} onChange={setSelected}>
                                                        <div className="relative mt-3">
                                                            <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                                                                <Combobox.Input
                                                                    className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
                                                                    displayValue={(person) => person.name}
                                                                    onChange={(event) => setQuery(event.target.value)}
                                                                />
                                                                <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                                                                    <KeyboardArrowDownIcon
                                                                        className="h-5 w-5 text-gray-400"
                                                                        aria-hidden="true"
                                                                    />
                                                                </Combobox.Button>
                                                            </div>
                                                            <Transition
                                                                as={Fragment}
                                                                leave="transition ease-in duration-100"
                                                                leaveFrom="opacity-100"
                                                                leaveTo="opacity-0"
                                                                afterLeave={() => setQuery('')}
                                                            >
                                                                <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                                    {filteredPeople.length === 0 && query !== '' ? (
                                                                        <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                                                                            Nothing found.
                                                                        </div>
                                                                    ) : (
                                                                        filteredPeople.map((person) => (
                                                                            <Combobox.Option
                                                                                key={person.id}
                                                                                className={({ active }) =>
                                                                                    `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-teal-600 text-white' : 'text-gray-900'
                                                                                    }`
                                                                                }
                                                                                value={person}
                                                                            >
                                                                                {({ selected, active }) => (
                                                                                    <>
                                                                                        <span
                                                                                            className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                                                                }`}
                                                                                        >
                                                                                            {person.name}
                                                                                        </span>
                                                                                        {selected ? (
                                                                                            <span
                                                                                                className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-white' : 'text-teal-600'
                                                                                                    }`}
                                                                                            >
                                                                                                {/* <CheckIcon className="h-5 w-5" aria-hidden="true" /> */}
                                                                                            </span>
                                                                                        ) : null}
                                                                                    </>
                                                                                )}
                                                                            </Combobox.Option>
                                                                        ))
                                                                    )}
                                                                </Combobox.Options>
                                                            </Transition>
                                                        </div>
                                                    </Combobox>
                                                </div>
                                            </div>
                                            <div className='flex flex-col'>
                                                <label htmlFor="Price" className="font-bold">Street Number </label>
                                                <input type="text" className='outline-none border border-gray-400 p-1 rounded-md' />
                                            </div>
                                            <div className='flex flex-col'>
                                                <label htmlFor="Price" className="font-bold">Street Name</label>
                                                <input type="text" className='outline-none border border-gray-400 p-1 rounded-md' />
                                            </div>
                                        </div>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                        <Disclosure as="div" className="mt-2">
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-[#337ab7] px-4 py-2 text-left text-sm font-medium text-white  focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                        <span>Do you offer technical support?</span>
                                        <KeyboardArrowDownIcon
                                            className={`${open ? 'rotate-180 transform' : ''
                                                } h-5 w-5 text-white`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="px-4 font-bold text-3xl pt-4 pb-2  text-gray-500">
                                        More Details Will be Come Here
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Detail


