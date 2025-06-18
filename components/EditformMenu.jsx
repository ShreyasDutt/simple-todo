
import React from 'react'
import { Button } from './ui/button'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog"
import { DialogClose, DialogTitle } from '@radix-ui/react-dialog'
import { Input } from './ui/input'
import { SquarePen } from 'lucide-react'
import { EditTodo } from '@/app/actions/User.actions'


const EditformMenu = ({todoId,content}) => {
        
        const handleSubmit = async(formData)=>{
            await EditTodo(todoId,formData);
        }

  return (
    <div>
         <Dialog>
      
        <DialogTrigger asChild>
         <Button
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0 text-slate-500 dark:text-slate-400 hover:text-green-500 dark:hover:text-green-400 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
              <SquarePen className="h-4 w-4" />
            </Button>
        </DialogTrigger>
         <DialogContent className="sm:max-w-[425px]">
            <form action={handleSubmit}>
           
            <DialogHeader>
            <DialogTitle>Edit Todo</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Input id="content" name="content" defaultValue={content} className={'my-5'}/>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <DialogClose asChild>
             <Button type="submit" className={'ml-2'}>Add</Button> 
            </DialogClose>
          </DialogFooter>
                     
          </form>
           </DialogContent>
    </Dialog>
    </div>
  )
}

export default EditformMenu