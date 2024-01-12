import Link from 'next/link';
import React from 'react'

const Dashboard = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='wrapper text-xl'>
                <p>
                    <span>At the moment, I have implemented complete authentication using {" "}</span>
                    <Link href="https://authjs.dev/" className='underline text-neutral-500'>
                        Auth.js ( Previously NextAuth )
                    </Link>
                    <span>.</span></p>
                <p>More features will be coming later. Feel free to follow the updates on the home page.</p>
            </div>
        </div>
    );
};

export default Dashboard;
