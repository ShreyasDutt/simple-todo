import TodoUi from '@/components/TodoUi'

const page = () => {
  return (
   <div className='grid grid-rows-1 grid-cols-1 md:grid-rows-2 md:grid-cols-2 lg:grid-cols-3'>
    <TodoUi/>
    <TodoUi/>
    <TodoUi/>
   </div>
  )
}

export default page