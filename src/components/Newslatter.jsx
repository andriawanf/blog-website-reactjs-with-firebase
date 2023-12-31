import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'

export default function Newslatter() {
    return (
        <div className="relative py-16 overflow-hidden bg-gray-100 isolate sm:py-24 lg:py-32">
            <div className="px-6 mx-auto max-w-7xl lg:px-8">
                <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                    <div className="max-w-xl lg:max-w-lg">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Subscribe to our newsletter.</h2>
                        <p className="mt-4 text-lg leading-8 text-gray-500">
                            Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit quis. Duis tempor incididunt
                            dolore.
                        </p>
                        <div className="flex max-w-md mt-6 gap-x-4">
                            <label htmlFor="email-address" className="sr-only">
                                Email address
                            </label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-900/50 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6"
                                placeholder="Enter your email"
                            />
                            <button
                                type="submit"
                                className="flex-none rounded-md bg-sky-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
                            >
                                Subscribe
                            </button>
                        </div>
                    </div>
                    <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
                        <div className="flex flex-col items-start">
                            <div className="p-2 rounded-md bg-sky-200 ring-1 ring-sky-500/40">
                                <CalendarDaysIcon className="w-6 h-6 text-sky-600" aria-hidden="true" />
                            </div>
                            <dt className="mt-4 font-semibold text-sky-500">Weekly articles</dt>
                            <dd className="mt-2 leading-7 text-gray-500">
                                Non laboris consequat cupidatat laborum magna. Eiusmod non irure cupidatat duis commodo amet.
                            </dd>
                        </div>
                        <div className="flex flex-col items-start">
                            <div className="p-2 rounded-md bg-sky-200 ring-1 ring-sky-500/40">
                                <HandRaisedIcon className="w-6 h-6 text-sky-600" aria-hidden="true" />
                            </div>
                            <dt className="mt-4 font-semibold text-sky-500">No spam</dt>
                            <dd className="mt-2 leading-7 text-gray-500">
                                Officia excepteur ullamco ut sint duis proident non adipisicing. Voluptate incididunt anim.
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
            <div className="absolute top-0 -translate-x-1/2 left-1/2 -z-10 blur-3xl xl:-top-6" aria-hidden="true">
                <div
                    className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#BEF264] to-[#0ea5e9] opacity-30"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
        </div>
    )
}
