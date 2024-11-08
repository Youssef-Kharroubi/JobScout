import React from 'react';
import remote from '../remote-svg-logo.svg';
import {Link,BrowserRouter as Router} from  'react-router-dom';
import Tooltip from '@mui/material/Tooltip';
import Statistics from '../pages/Statistics';
export default function Header(){
    return (
        <header className="bg-gray-100 fixed left-0 right-0 top-0 z-50 ">
            <div className="mx-auto max-w-screen-xl px-3 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="md:flex md:items-center md:gap-12">

                        <a className="flex items-center text-black" href="/">
                            <img src={remote} alt="Home" className="h-8 mr-2" />
                            <h1 className="text-xl font-bold mr-2">JobScout</h1>
                        </a>

                    </div>

                    <div className="hidden md:block">
                        <nav aria-label="Global">

                            <ul className="flex items-center gap-6 text-sm">
                                <li>
                                    <Link className="text-gray-500 transition hover:text-gray-500/75" to={"./Statistics"} > Stats </Link>
                                </li>

                    {/*            <li>*/}
                    {/*                <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Careers </a>*/}
                    {/*            </li>*/}

                    {/*            <li>*/}
                    {/*                <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> History </a>*/}
                    {/*            </li>*/}

                    {/*            <li>*/}
                    {/*                <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Services </a>*/}
                    {/*            </li>*/}

                    {/*            <li>*/}
                    {/*                <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Projects </a>*/}
                    {/*            </li>*/}

                    {/*            <li>*/}
                    {/*                <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Blog </a>*/}
                    {/*            </li>*/}
                            </ul>

                        </nav>
                    </div>



                    <div className="flex items-center gap-4">
                        <div className="sm:flex sm:gap-4">
                            <Tooltip title="Login soon">
                            <a
                                className="rounded-md bg-white px-5 py-2.5 text-sm font-medium text-black shadow hover:bg-black hover:text-white"
                                href="#"
                            >
                                Login
                            </a>
                            </Tooltip>
                            <div className="hidden sm:flex">
                                <Tooltip title="Register soon">
                                <a
                                    className="rounded-md bg-black px-5 py-2.5 text-sm font-medium text-white hover:text-black hover:bg-white"
                                    href="#"
                                >
                                    Register
                                </a>
                                </Tooltip>
                            </div>
                        </div>

                        <div className="block md:hidden">
                            <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}