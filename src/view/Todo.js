const Todo = (props) => {
    //properties 
    // parent => child, top => bottom
    const {title, todos, deleteDataToDo} = props;

    const handleDelete = (id) =>{
        deleteDataToDo(id)
    }
    return (
        <div className="todos-container">
            <div className='title'>
                {title}
            </div>
            {todos.map(todo => {
                console.log('>>> check todo list: ', todo)
                return (
                    <div key={todo.id}>
                        <li className="todo-child"> {todo.title} &nbsp; 
                        <button onClick={() => handleDelete(todo.id)}>x</button>
                        </li>
                        
                    </div>
                   
                )
            })}
            <hr/>

        </div>
    )
}

export default Todo;