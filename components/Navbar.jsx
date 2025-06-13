import React from 'react'
import {
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import { ModeToggle } from './ModeToggle'
import Link from 'next/link'
import { Button } from './ui/button'
import { NotebookPen } from 'lucide-react'
const Navbar = () => {
  return (
    <div className='flex items-center justify-between '>
    <Link href={'/'} className='ml-10 flex gap-2'>
    <p><NotebookPen/></p>
    <p className='font-bold'>Notes</p>
    </Link>
     <div className='flex items-center py-7 px-5 justify-end gap-5'>
            <ModeToggle/>
            <SignedOut>
              <Link href={'/sign-in'}>
              <Button>
                Get Started
              </Button>
              </Link>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
            
    </div>
    </div>
   
  )
}

export default Navbar