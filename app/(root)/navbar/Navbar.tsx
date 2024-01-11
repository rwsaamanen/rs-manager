import Link from 'next/link';
import React from 'react';
import NavLinks from './NavLinks';
import { LoginButton } from '@/components/auth/login-button';

async function Navbar() {

    return (
        <header className="sticky top-0 z-50 bg-[#fdfdfd] border-b border-neutral-200">
            <section className="wrapperNav p-4 flex justify-between items-center">
                <Link href={'/'} className="w-full flex gap-2 justify-left items-center">
                    <span className="font-semibold text-2xl">Swiftyfi.</span>
                </Link>

                <div className="w-full hidden md:w-auto md:block items-center text-center">
                    <NavLinks />
                </div>

                <aside className="flex w-full gap-2 justify-end items-center">
                    <LoginButton>
                        <button className="rounded-md text-sm font-semibold p-1 px-2 text-neutral-600 transition-all hover:bg-neutral-200">
                            Login
                        </button>
                    </LoginButton>
                </aside>
            </section>
        </header>
    );
};

export default Navbar;
