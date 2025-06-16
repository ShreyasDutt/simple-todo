"use client"
import React from 'react'
import {
  DialogClose,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from './ui/button';
import { Input } from './ui/input';
import { addTodo } from '@/app/actions/User.actions';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

const AddForm = () => {
      const router = useRouter();

      const handleSubmit = async(formData)=>{
          const result = await addTodo(formData);
    
          if (result.success) {
            toast(result.message);
            router.refresh('/');
          }else{
            toast.error(result.message);
          }
      }

  return (
    <form action={handleSubmit}>
           
            <DialogHeader>
            <DialogTitle>Add Todo</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Input id="content" name="content" placeholder='Do dishes....' className={'my-5'}/>
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
  )
}

export default AddForm