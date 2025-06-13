import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Trash2 } from 'lucide-react'
import React from 'react'

const TodoUi = () => {
  return (
    <div className=' flex flex-col p-4'>
      <div className='bg-slate-800 w-full max-w-lg rounded-xl shadow-xl border border-slate-700'>
        {/* Header with date and actions */}
        <div className='py-4 px-4 text-sm text-slate-300 border-b-2 border-dashed border-slate-600 flex items-center justify-between'>
          <span className='font-medium'>Friday 13th June</span>
          <div className='flex items-center gap-3'>
            <Checkbox className='data-[state=checked]:bg-slate-600 data-[state=checked]:border-slate-600' />
            <Button 
              variant="ghost" 
              size="sm"
              className='h-8 w-8 p-0 text-slate-400 hover:text-red-400 hover:bg-slate-700 transition-colors'
            >
              <Trash2 className='h-4 w-4' />
            </Button>
          </div>
        </div>
        
        {/* Note content */}
        <div className='py-4 px-4'>
          <div className='text-slate-100 text-base leading-relaxed min-h-[100px]'>
            Note here
          </div>
        </div>
      </div>
    </div>
  )
}

export default TodoUi