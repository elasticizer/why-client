import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
    const session = useSession();

    return (
        <>
            {/* <!-- ========== HEADER ========== --> */}
            <header className="sticky top-0 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full bg-white border-b border-gray-200 text-md py-3 md:py-0 ">
                <nav className="relative max-w-[100rem] w-full mx-auto px-4 md:flex md:items-center md:justify-between md:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        <Link href="/">
                            <div className="flex-none text-xl font-semibold dark:text-white">
                                <Image
                                    src="/image/why_logo.png"
                                    width={250}
                                    height={100}
                                    alt="why logo"
                                />
                            </div>
                        </Link>
                        <div className="md:hidden">
                            <button
                                type="button"
                                className="hs-collapse-toggle size-9 flex justify-center items-center text-md font-semibold rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                                data-hs-collapse="#navbar-collapse-with-animation">
                                <IoMenu className="hs-collapse-open:hidden flex-shrink-0 size-4" />
                                <IoMdClose className="hs-collapse-open:block hidden flex-shrink-0 size-4" />
                            </button>
                        </div>
                    </div>
                    <div
                        id="navbar-collapse-with-animation"
                        className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block">
                        <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:ps-7">
                            <Link href="/about">
                                <div
                                    className="font-medium text-gray-500 hover:text-orange-400 md:py-6"
                                    href="/about">
                                    關於
                                </div>
                            </Link>
                            <Link
                                className="font-medium text-gray-500 hover:text-orange-400 md:py-6"
                                href="#">
                                領域
                            </Link>
                            <div className="hs-dropdown hs-dropdown-example relative inline-flex">
                                <button
                                    id="hs-dropdown-example"
                                    type="button"
                                    className="hs-dropdown-toggle inline-flex items-center gap-x-2 text-md font-medium text-gray-500 hover:text-orange-400">
                                    部落格
                                    <IoIosArrowDown />
                                </button>

                                <div className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 w-56 hidden z-10 mt-2 min-w-60 bg-white shadow-md rounded-lg p-2">
                                    <Link
                                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-md text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                                        href="#">
                                        分類1
                                    </Link>
                                    <Link
                                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-md text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                                        href="#">
                                        分類2
                                    </Link>
                                    <Link
                                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-md text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                                        href="#">
                                        分類3
                                    </Link>
                                    <Link
                                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-md text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                                        href="#">
                                        分類4
                                    </Link>
                                </div>
                            </div>
                            <Link
                                className="font-medium text-gray-500 hover:text-orange-400 md:py-6"
                                href="#">
                                購物車
                            </Link>
                            {session ? <LogoutSession /> : <LoginSession />}
                        </div>
                    </div>
                </nav>
            </header>
            {/* <!-- ========== END HEADER ========== --> */}
        </>
    );
}
