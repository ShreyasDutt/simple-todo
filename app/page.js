import AddFloatingButton from '@/components/AddFloatingButton'
import TodoUi from '@/components/TodoUi'
import { getTodos } from './actions/User.actions';
import { Notebook } from 'lucide-react';

const page = async () => {
  const data = await getTodos();
  const Todos = data.Todos;

  return (
    <div className="relative min-h-screen">
      {Todos.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {Todos.map((Todo) => (
            <div key={Todo._id} className="transition-all">
              <TodoUi
                id={Todo._id.toString()}
                date={Todo.createdAt}
                content={Todo.content}
                done={Todo.done}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-[70vh] text-center text-muted-foreground p-4">
          <Notebook className="w-16 h-16 mb-4 text-primary" />
          <h2 className="text-2xl font-semibold mb-2">No Todos Yet</h2>
          <p className="text-sm">You haven&apos;t added any tasks. Start planning your day now!</p>
        </div>
      )}

      {/* Floating Action Button */}
      <AddFloatingButton />
    </div>
  );
};

export default page;
