import TodoListItem from './TodoListItems';
import './TodoList.scss';

const TodoList = ( { todos, onRemove, onToggle } ) => {
    return (
        <div clssName="TodoList">
           {todos.map(todo => (
                <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle}/>))}
        </div>
    );
};

export default TodoList;