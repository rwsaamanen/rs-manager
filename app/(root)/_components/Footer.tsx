import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='border-t border-neutral-200'>
      <div className="flex-center wrapper justify-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href="/">
          <h1 className='font-bold underline text-xl'>Swiftyfi</h1>
        </Link>
        <p>&copy; 2024 Swiftyfi. All Rights Reserved.</p>
      </div>
    </footer>
  )
};

export default Footer
