"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { UserButton } from "@/components/auth/user-button";

const Navbar = () => {
    const pathname = usePathname();
    return (
        <header className="sticky top-0 z-50 bg-[fdfdfd] border-b border-neutral-200">
            <section className="wrapperNav p-4 flex justify-between items-center">
                <Link href={'/'} className="w-full flex gap-2 justify-left items-center">
                    <span className="font-bold text-xl">Swiftyfi.</span>
                </Link>
                <div className="w-full hidden md:w-auto md:block items-center text-center">

                </div>
                <aside className="flex w-full gap-2 justify-end items-center">
                    <UserButton />
                </aside>
            </section>
        </header>
    )
}

export default Navbar