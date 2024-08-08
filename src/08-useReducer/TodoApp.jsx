import { TodoList } from './components/TodoList';
import { AddTodoForm } from './components/AddTodoForm';
import { useTodo } from '../hooks/useTodo';

export const TodoApp = () => {

    const {
        todos, 
        allTodosCount, 
        pendingTodosCount, 
        onNewTodo, 
        onDeleteTodo, 
        onDoneTodo
    } = useTodo();

    return (
    <>
        <h4 role='h4' >ToDo ( {allTodosCount} ) - <span> Pendiente ( {JSON.stringify(pendingTodosCount)} ) </span></h4>
        <hr />

        <div className="row">            
            <div className="col-7">
                <TodoList 
                    todos={ todos } 
                    onDeleteTodo={ onDeleteTodo }
                    onDoneTodo={ onDoneTodo }
                />
            </div>
            
            <div className="col-5">
                <h4>Nuevo TO-DO</h4>
                <hr />
                <AddTodoForm 
                    onNewTodo={onNewTodo} 
                />
            </div>
        </div>
    </>
  )
}