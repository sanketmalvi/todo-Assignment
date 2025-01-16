
import { useSelector, useDispatch } from 'react-redux'
import { FaStar } from 'react-icons/fa';
import { done } from '../redux/compeletedSlice';
import { removeTodo, toggleTaskImportant } from '../redux/todoSlices';



const TodoItem = () => {
    const todos = useSelector(state => state.todo.todos)
    // console.log(todos)
    const dispatch = useDispatch()

    const toggleTaskDone = (taskId) => {
        const itemToDone = todos.find(task => task.id === taskId)
        dispatch(done(itemToDone))
        dispatch(removeTodo(taskId))


    };
    const handleImportant = (taskId) => {

        dispatch(toggleTaskImportant(taskId))

    }



    return (
        <>

            <div className="list-none flex flex-wrap  dark:bg-black dark:text-white">
                {todos.map((task) => (
                    <div
                        key={task.id}
                        className="max-w-sm mx-full m-[1vw] bg-white shadow-lg rounded-lg overflow-hidden my-4  dark:bg-black dark:text-white "
                    >
                        <div className="p-4">
                            <div className="flex justify-self-center ">
                                <input
                                    type="checkbox"
                                    checked={task.isDone}
                                    onChange={() => toggleTaskDone(task.id)}
                                    className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                />
                                <span className={`${task.isDone ? 'line-through text-gray-500' : ''}`}>
                                    {task.title}
                                </span>
                                <button onClick={() => handleImportant(task.id)}>
                                    <FaStar
                                        className={`text-xl ${task.isImportant ? 'text-yellow-500' : 'text-gray-300'} hover:text-yellow-400`}
                                    />
                                </button>


                            </div>



                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default TodoItem