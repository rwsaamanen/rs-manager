import Link from 'next/link'
import React from 'react'

const Cta = () => {
    return (
        <div
            className="bg-primary p-8 md:px-20 md:py-20 mt-20 mx-auto max-w-5xl rounded-lg flex flex-col items-center text-center mb-20">
            <h2 className="text-white text-4xl md:text-6xl tracking-tight">
                Have questions?
            </h2>
            <p className="text-gray-400 mt-4 text-lg md:text-xl">
                Feel free to contact at any times if you have questions.
            </p>
            <div className="flex mt-5">
                <Link href="/contact" className='p-2 px-4 rounded-md bg-white text-black'>Contact</Link>
            </div>
        </div>
    )
}

export default Cta