import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className='flex flex-col items-center my-20'>
        <div className='border-2 border-dashed rounded-xl '>
            <SignIn/>
        </div>
    </div>
  )
}