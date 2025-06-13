import TodoUi from '@/components/TodoUi'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'

const page = () => {
  return (
    <div className='relative min-h-screen'>
      {/* Todo Grid */}
      <div className='grid grid-rows-1 grid-cols-1 md:grid-rows-2 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
        <TodoUi/>
        <TodoUi/>
        <TodoUi/>
      </div>
      
      {/* Floating Action Button */}
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
    </div>
  )
}

export default page