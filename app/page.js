import AddFloatingButton from '@/components/AddFloatingButton'
import TodoUi from '@/components/TodoUi'

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
      <AddFloatingButton/>
    </div>
  )
}

export default page