"use client"
import { Button } from '@/components/ui/button'
import { UserButton, useUser } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Header() {
  const { user } = useUser();
  return (
    <div className='px-10 lg:px-32 xl:px-48 2xl:px-56 p-4 flex justify-between items-center shadow-sm'>
      <Link href={'/'}>
        {/* <Image src={'/logo.svg'} alt='logo' width={180} height={100}/> */}
        <div className="px-1 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-transparent bg-clip-text">
          Logoipsum
        </div>

      </Link>
      <div className='flex gap-3 items-center'>
        {user ? <Link href={'/dashboard'}>
          <Button className="px-6 py-2 text-white font-semibold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 rounded-full hover:opacity-90 transition duration-300">Dashboard</Button>
        </Link> :
          <Button className="px-6 py-2 text-white font-semibold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 rounded-full hover:opacity-90 transition duration-300" >Get Started</Button>}
        <UserButton />
      </div>

    </div>
  )
}

export default Header