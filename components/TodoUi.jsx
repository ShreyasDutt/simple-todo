"use client"
import { CheckTodo, DeleteTodo } from '@/app/actions/User.actions'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Trash2 } from 'lucide-react'
import React from 'react'
import { toast } from 'sonner'

const TodoUi = ({date, content,done,id}) => {
    const formattedDate = new Date(date).toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
  });


  return (
    <div className="flex flex-col p-4">
      <div className="bg-white dark:bg-slate-950 w-full max-w-lg rounded-xl shadow-xl border border-slate-200 dark:border-slate-700">
        <div className="py-4 px-4 text-sm text-slate-700 dark:text-slate-300 border-b-2 border-dashed border-slate-300 dark:border-slate-600 flex items-center justify-between">
          <span className="font-medium">{formattedDate}</span>
          <div className="flex items-center gap-3">
            
            <Checkbox className="data-[state=checked]:bg-slate-600 data-[state=checked]:border-slate-600" onCheckedChange={()=>{
              CheckTodo(id);
            }}/>
            <Button onClick = {async()=>{
              const res = await DeleteTodo(id);
              if(res.success) return toast.success(res.message);
              toast.error('Something went wrong')
            }}
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0 text-slate-500 dark:text-slate-400 hover:text-red-500 dark:hover:text-red-400 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="py-4 px-4">
          <div className={`text-slate-800 dark:text-slate-100 text-base leading-relaxed min-h-[100px] ${done ? "line-through text-gray-50 dark:text-slate-500":""}`}>
            {content}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TodoUi
