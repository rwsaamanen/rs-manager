"use client";

import { useState } from 'react';
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavLinks = () => {
    const pathname = usePathname();
    const isActiveAbout = pathname === '/about';
    const isActivePricing = pathname === '/pricing';
    const isActiveContact = pathname === '/contact';

    const [isFeaturesDropdownOpen, setIsFeaturesDropdownOpen] = useState(false);
    const [isResourcesDropdownOpen, setIsResourcesDropdownOpen] = useState(false);

    const openFeaturesDropdown = () => setIsFeaturesDropdownOpen(true);
    const closeFeaturesDropdown = () => setIsFeaturesDropdownOpen(false);

    const openResourcesDropdown = () => setIsResourcesDropdownOpen(true);
    const closeResourcesDropdown = () => setIsResourcesDropdownOpen(false);

    return (
        <ul className='md:flex-between flex w-full flex-col items-start gap-3 md:gap-5 md:flex-row'>
            <li
                className={`${isActiveAbout ? 'bg-neutral-700' : 'text-neutral-600'} rounded-md p-1 flex items-center px-2 hover:bg-neutral-200 text-sm font-medium whitespace-nowrap`}
            >
                <Link href='/about'>
                    <button>
                        About
                    </button>
                </Link>
            </li>
            <li
                className={`text-sm font-medium whitespace-nowrap ${pathname === '/features' ? 'text-neutral-600 hover:text-white/80' : 'text-neutral-600 hover:text-white/80'} flex items-center relative`}
                onMouseEnter={openFeaturesDropdown}
                onMouseLeave={closeFeaturesDropdown}
            >
                <button className={`rounded-md p-1 flex items-center px-2 ${pathname === '/features' ? 'text-white/80 hover:bg-neutral-700' : 'text-neutral-600 transition-all hover:bg-neutral-200'}`}>
                    Features
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="3"
                        stroke="currentColor"
                        className={`w-3 h-3 ml-1 self-center transition-transform transform ${isFeaturesDropdownOpen ? 'rotate-180' : 'rotate-0'}`}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        ></path>
                    </svg>
                </button>
                <div
                    className={`absolute top-full left-0 bg-neutral-900 border border-neutral-800 p-2 w-32 ${isFeaturesDropdownOpen ? 'block' : 'hidden'}`}>
                    <p>Content</p>
                </div>
            </li>
            <li
                className={`text-sm font-medium whitespace-nowrap ${pathname === '/resources' ? 'text-neutral-600 hover:text-white/80' : 'text-neutral-600 hover:text-white/80'} flex items-center relative`}
                onMouseEnter={openResourcesDropdown}
                onMouseLeave={closeResourcesDropdown}
            >
                <button className={`rounded-md p-1 flex items-center px-2 ${pathname === '/resources' ? 'text-neutral-600 hover:bg-neutral-700' : 'text-neutral-600 transition-all hover:bg-neutral-200'}`}>
                    Resources
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="3"
                        stroke="currentColor"
                        className={`w-3 h-3 ml-1 self-center transition-transform transform ${isResourcesDropdownOpen ? 'rotate-180' : 'rotate-0'}`}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        ></path>
                    </svg>
                </button>
                <div
                    className={`absolute top-full left-0 bg-neutral-900 border border-neutral-800 p-2 w-32 ${isResourcesDropdownOpen ? 'block' : 'hidden'}`}>
                    <p>Content</p>
                </div>
            </li>
            <li
                className={`${isActivePricing ? 'text-white bg-neutral-700' : 'text-neutral-600'} rounded-md p-1 flex items-center px-2 hover:bg-neutral-200 text-sm font-medium whitespace-nowrap`}
            >
                <Link href='/pricing'>
                    <button>
                        Pricing
                    </button>
                </Link>
            </li>
            <li
                className={`${isActiveContact ? 'text-white bg-neutral-700' : 'text-neutral-600'} rounded-md p-1 flex items-center px-2 hover:bg-neutral-200 text-sm font-medium whitespace-nowrap`}
            >
                <Link href='/contact'>
                    <button>
                        Contact
                    </button>
                </Link>
            </li>
        </ul>
    );
}

export default NavLinks;
