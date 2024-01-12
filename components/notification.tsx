import Link from 'next/link';
import React from 'react';

const Notification = () => {
    return (
        <header className="sticky top-0 z-50 bg-[#cdcdcd] border-b border-neutral-200">
            <section className="flex justify-center items-center text-sm p-2">
                <p>The source code for this application is
                    <Link href="https://github.com/rwsaamanen/rs-manager" className='hover:underline hover:text-blue-600'>
                        {" available on Github."}
                    </Link>
                </p>
            </section>
        </header>
    );
}

export default Notification;
