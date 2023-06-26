"use client";
import 'tailwindcss/tailwind.css';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleResize = () => {
                if (window.innerWidth > 768) {
                    setIsMenuOpen(false);
                }
            };

            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }
    }, []);

    return (
        <div className="bg-blue-700 fixed h-24 w-full z-20 top-0 left-0 rounded-b-3xl shadow-lg shadow-indigo-500/40">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link href="/" className="flex items-center ml-8">
                    <Image src={"/logo-exdecode.png"} width={60} height={60} alt="Exdecode Logo" />
                </Link>
                <div className="flex md:order-2 mr-8">
                    <button
                        onClick={toggleMenu}
                        type="button"
                        className="inline-flex items-center p-2 text-sm text-white rounded-lg md:hidden"
                        aria-controls="navbar-sticky"
                        aria-expanded={isMenuOpen ? 'true' : 'false'}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-8 h-8"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </button>
                </div>
                <div
                    className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isMenuOpen ? 'block' : 'hidden'
                        }`}
                    id="navbar-sticky"
                >
                    <ul className="bg-blue-700 flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:flex-row md:space-x-12 md:mt-0 md:border-0">
                        <li>
                            <a
                                href="/"
                                className="block text-xl py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:text-white-300 md:p-0 md:dark:text-white-300 hover:text-gray-200"
                                aria-current="page"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="/about"
                                className="block text-xl py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:text-white-300 md:p-0 md:dark:text-white-300 hover:text-gray-200"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="/contact"
                                className="block text-xl py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:text-white-300 md:p-0 md:dark:text-white-300 hover:text-gray-200"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
