import { Link } from 'react-router-dom';
import { Fragment, useState } from 'react';
import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Dialog, Disclosure, Popover, Transition, Menu } from '@headlessui/react';
import { useNavigate } from 'react-router-dom';
import {
    // ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    Cog6ToothIcon,
    PencilSquareIcon,
    SquaresPlusIcon,
    UserIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline';
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid';

const products = [
    { name: 'Create blog', description: 'Create the best of your blog here', href: '#', icon: PencilSquareIcon },
    { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
    { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
    // { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]
const callsToAction = [
    { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
    { name: 'Contact help', href: '#', icon: PhoneIcon },
]


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


export default function Navbar() {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const signUserOut = async () => {
        await signOut(auth);
        navigate("/")
    }

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return (
        <header className="fixed top-0 z-50 w-full bg-transparent shadow-lg backdrop-blur-2xl font-comfortaa">
            <nav className="flex items-center justify-between p-6 mx-auto max-w-7xl lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link to='/' className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <img className="w-auto h-8" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="w-6 h-6" aria-hidden="true" />
                    </button>
                </div>
                <Popover.Group className="hidden lg:flex lg:gap-x-12">
                    <Popover className="relative">
                        <Popover.Button className="flex items-center text-sm font-semibold leading-6 text-gray-900 gap-x-1">
                            Blog
                            <ChevronDownIcon className="flex-none w-5 h-5 text-gray-400" aria-hidden="true" />
                        </Popover.Button>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <Popover.Panel className="absolute z-10 w-screen max-w-md mt-3 overflow-hidden bg-white shadow-lg -left-8 top-full rounded-3xl ring-1 ring-gray-900/5">
                                <div className="p-4">
                                    {products.map((item) => (
                                        <div
                                            key={item.name}
                                            className="relative flex items-center p-4 text-sm leading-6 rounded-lg group gap-x-6 hover:bg-gray-50"
                                        >
                                            <div className="flex items-center justify-center flex-none rounded-lg h-11 w-11 bg-gray-50 group-hover:bg-white">
                                                <item.icon className="w-6 h-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                                            </div>
                                            <div className="flex-auto">
                                                <a href={item.href} className="block font-semibold text-gray-900">
                                                    {item.name}
                                                    <span className="absolute inset-0" />
                                                </a>
                                                <p className="mt-1 text-gray-600">{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                                    {callsToAction.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                                        >
                                            <item.icon className="flex-none w-5 h-5 text-gray-400" aria-hidden="true" />
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </Popover>

                    <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                        Features
                    </a>
                    <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                        Marketplace
                    </a>
                    <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                        Company
                    </a>
                </Popover.Group>

                <div className="hidden lg:flex lg:flex-1 lg:justify-end ">
                    <Menu as="div" className="relative">
                        {!user ?
                            (<Link to="/login" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                Log in <span aria-hidden="true"></span>
                            </Link>) :
                            (<Menu.Button className='flex'>
                                <img className="w-8 h-8 rounded-full ring-2 hover:ring-indigo-600" src={user?.photoURL} alt="" />
                            </Menu.Button>)
                        }
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-2"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <Menu.Items className="absolute z-10 max-w-md p-4 mt-3 overflow-hidden bg-white shadow-xl w-80 -left-36 top-full rounded-3xl ring-1 ring-gray-900/5">
                                <Menu.Item className="pt-4">
                                    <div
                                        className="relative flex items-center text-sm leading-6 rounded-lg group gap-x-6 hover:bg-gray-50"
                                    >
                                        <div className="flex items-center justify-center flex-none rounded-lg h-11 w-11 bg-gray-50 group-hover:bg-white">
                                            <UserIcon className="w-5 h-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                                        </div>
                                        <div className="flex-auto">
                                            <a href="/" className="block font-semibold text-gray-900 group-hover:underline">
                                                {user?.displayName}
                                                <span className="absolute inset-0" />
                                            </a>
                                        </div>
                                    </div>
                                </Menu.Item>
                                <Menu.Item className="pt-4">
                                    <div
                                        className="relative flex items-center text-sm leading-6 rounded-lg group gap-x-6 hover:bg-gray-50"
                                    >
                                        <div className="flex items-center justify-center flex-none rounded-lg h-11 w-11 bg-gray-50 group-hover:bg-white">
                                            <Cog6ToothIcon className="w-5 h-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                                        </div>
                                        <div className="flex-auto">
                                            <a href="/" className="block font-semibold text-gray-900 group-hover:underline">
                                                Settings
                                                <span className="absolute inset-0" />
                                            </a>
                                        </div>
                                    </div>
                                </Menu.Item>
                                <Menu.Item className="mt-4 py-2.5 px-3.5">
                                    <div
                                        className="relative flex items-center justify-center p-2 text-sm leading-6 bg-red-600 rounded-lg group gap-x-6 hover:bg-red-700"
                                    >
                                        <button onClick={signUserOut} className="block font-semibold text-white group-hover:underline">
                                            Log Out
                                            <span className="absolute inset-0" />
                                        </button>
                                    </div>
                                </Menu.Item>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </div>
            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full px-6 py-6 overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                className="w-auto h-8"
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                alt=""
                            />
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="w-6 h-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="flow-root mt-6">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="py-6 space-y-2">
                                <Disclosure as="div" className="-mx-3">
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                                Product
                                                <ChevronDownIcon
                                                    className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                                                    aria-hidden="true"
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="mt-2 space-y-2">
                                                {[...products, ...callsToAction].map((item) => (
                                                    <Disclosure.Button
                                                        key={item.name}
                                                        as="a"
                                                        href={item.href}
                                                        className="block py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
                                                    >
                                                        {item.name}
                                                    </Disclosure.Button>
                                                ))}
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                                <a
                                    href="#"
                                    className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
                                >
                                    Features
                                </a>
                                <a
                                    href="#"
                                    className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
                                >
                                    Marketplace
                                </a>
                                <a
                                    href="#"
                                    className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
                                >
                                    Company
                                </a>
                            </div>
                            <div className="py-6">
                                <Link
                                    to="/login"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 cursor-pointer"
                                >
                                    Log in
                                </Link>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}
