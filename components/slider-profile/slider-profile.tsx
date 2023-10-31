import {Fragment, useRef, useState} from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'
import Image from "next/image";
import aiImage from "@/public/assets/ai-image.png";


function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

interface DataType {
    heading?: string;
    summary?: string;
}
interface PropsSliderProfile {
    open: boolean,
    setOpen: (open: boolean) => void,
    data: DataType[],
    onAlterar: (heading: string, summary: string) => void
}

export default function SliderProfile({ open = true, setOpen, data, onAlterar }: PropsSliderProfile) {
    const headingRef = useRef<HTMLTextAreaElement | null>(null);
    const summaryRef = useRef<HTMLTextAreaElement | null>(null);
    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={() => setOpen(false)}>
                <div className="fixed inset-0" />

                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
                            <Transition.Child
                                as={Fragment}
                                enter="transform transition ease-in-out duration-500 sm:duration-700"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transform transition ease-in-out duration-500 sm:duration-700"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <Dialog.Panel className="pointer-events-auto w-screen max-w-2xl">
                                    <div className="flex h-full flex-col overflow-y-scroll bg-white-100 shadow-xl py-2">
                                        <div className="px-4 py-6 sm:px-6">
                                            <div className="flex items-start justify-between">
                                                <Dialog.Title className="text-base font-semibold leading-6 text-gray-900 ">Editar Home</Dialog.Title>
                                                <div className="ml-3 flex h-7 items-center">
                                                    <button
                                                        type="button"
                                                        className="relative rounded-md bg-white-100 text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-green-500"
                                                        onClick={() => setOpen(false)}
                                                    >
                                                        <span className="absolute -inset-2.5" />
                                                        <span className="sr-only">Close panel</span>
                                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Main */}
                                        <div className="divide-y divide-gray-100 ">
                                            <div className="pb-6">
                                                <div className="h-24 bg-green-500 sm:h-20 lg:h-28" />
                                                <div className="-mt-12 flow-root px-4 sm:-mt-8 sm:flex sm:items-end sm:px-6 lg:-mt-16">
                                                    <div>
                                                        <div className="-m-1 flex">
                                                            <div className="inline-flex overflow-hidden rounded-lg border-4 border-white-100">
                                                                <Image
                                                                    className="h-24 w-24 flex-shrink-0 sm:h-40 sm:w-40 lg:h-48 lg:w-48"
                                                                    src={aiImage}
                                                                    alt=""
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="mt-6 sm:ml-6 sm:flex-1">
                                                        <div>
                                                            <div className="flex items-center">
                                                                <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">Igor Guariroba</h3>
                                                                <span className="ml-2.5 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-green-400">
                                  <span className="sr-only">Online</span>
                                </span>
                                                            </div>
                                                            <p className="text-sm text-gray-400">@Igor Guariroba</p>
                                                        </div>
                                                        <div className="mt-5 flex flex-wrap space-y-3 sm:space-x-3 sm:space-y-0">
                                                            <button
                                                                onClick={() => onAlterar(headingRef.current?.value || '', summaryRef.current?.value || '')}
                                                                type="button"
                                                                className="inline-flex w-full flex-shrink-0 items-center justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white-100 shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 sm:flex-1"
                                                            >
                                                                Alterar
                                                            </button>
                                                            <button
                                                                onClick={() => setOpen(false)}
                                                                type="button"
                                                                className="inline-flex w-full flex-1 items-center justify-center rounded-md bg-white-100 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                                            >
                                                                Cancelar
                                                            </button>
                                                            <div className="ml-3 inline-flex sm:ml-0">
                                                                <Menu as="div" className="relative inline-block text-left">
                                                                    <Menu.Button className="relative inline-flex items-center rounded-md bg-white-100 p-2 text-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                                                                        <span className="absolute -inset-1" />
                                                                        <span className="sr-only">Open options menu</span>
                                                                        <EllipsisVerticalIcon className="h-5 w-5" aria-hidden="true" />
                                                                    </Menu.Button>
                                                                    <Transition
                                                                        as={Fragment}
                                                                        enter="transition ease-out duration-100"
                                                                        enterFrom="transform opacity-0 scale-95"
                                                                        enterTo="transform opacity-100 scale-100"
                                                                        leave="transition ease-in duration-75"
                                                                        leaveFrom="transform opacity-100 scale-100"
                                                                        leaveTo="transform opacity-0 scale-95"
                                                                    >
                                                                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white-100 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                                            <div className="py-1">
                                                                                <Menu.Item>
                                                                                    {({ active }) => (
                                                                                        <a
                                                                                            href="#"
                                                                                            className={classNames(
                                                                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                                                'block px-4 py-2 text-sm'
                                                                                            )}
                                                                                        >
                                                                                            View profile
                                                                                        </a>
                                                                                    )}
                                                                                </Menu.Item>
                                                                                <Menu.Item>
                                                                                    {({ active }) => (
                                                                                        <a
                                                                                            href="#"
                                                                                            className={classNames(
                                                                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                                                'block px-4 py-2 text-sm'
                                                                                            )}
                                                                                        >
                                                                                            Copy profile link
                                                                                        </a>
                                                                                    )}
                                                                                </Menu.Item>
                                                                            </div>
                                                                        </Menu.Items>
                                                                    </Transition>
                                                                </Menu>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="px-4 py-5 sm:px-0 sm:py-0">
                                                <dl className="space-y-8 sm:space-y-0 sm:divide-y sm:divide-gray-100">
                                                    <div className="sm:flex sm:px-6 sm:py-5">
                                                        <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48">Titulo</dt>
                                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:ml-6 sm:mt-0">
                                                            <textarea ref={headingRef}>
                                                                {data[0]?.heading}
                                                            </textarea>
                                                        </dd>
                                                    </div>
                                                    <div className="sm:flex sm:px-6 sm:py-5">
                                                        <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48">
                                                            Sub-titulo
                                                        </dt>
                                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:ml-6 sm:mt-0">
                                                            <textarea ref={summaryRef}>
                                                            {data[0]?.summary}
                                                            </textarea>
                                                        </dd>
                                                    </div>
                                                </dl>
                                            </div>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
