import React from 'react'
import { Button } from './ui/button'
import { Plus } from 'lucide-react'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"

const AddFloatingButton = () => {
  return (
    <div>
         <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button
        className="fixed bottom-6 right-6 rounded-full w-14 h-14 p-0 
                   bg-white dark:bg-black 
                   text-gray-800 dark:text-gray-200 
                   border-2 border-gray-300 dark:border-gray-600
                   hover:bg-gray-50 dark:hover:bg-gray-900
                   hover:border-gray-400 dark:hover:border-gray-500
                   shadow-lg hover:shadow-xl 
                   transition-all duration-300 ease-in-out
                   hover:scale-105 active:scale-95"
      >
        <Plus className="w-6 h-6" />
      </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Todo</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Input id="content" name="content" placeholder='Do dishes....' defaultValue='' />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Add</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
    </div>
  )
}

export default AddFloatingButton