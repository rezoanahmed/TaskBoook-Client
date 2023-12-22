import { useContext } from "react";
import AuthContext, { FirebaseContext } from "../../context/AuthContext";

const AddTodos = () => {
    const {user} = useContext(FirebaseContext);
    const handleAddTodo = e =>{
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const description = form.description.value;
        const deadline = form.deadline.value;
        const priority = form.priority.value;
        const result = {
            title, description, deadline, priority, user: user?.email,
        }
        console.log(result);
    }
    return (
        <div>
            <div className="p-4 md:p-10">
                <h1 className="text-center font-medium text-4xl">What's on your mind today?</h1>
                <div className="pt-4">
                    <form onSubmit={handleAddTodo} className="flex flex-col md:flex-row justify-center md:items-center gap-4">
                        <input name="title" type="text" className="input input-bordered" placeholder="Task Title" />
                        <input name="description" type="text" className="input input-bordered" placeholder="Task Description" />
                        <input name="deadline" type="date" className="input input-bordered" />
                        <select name="priority" className="select select-bordered">
                            <option disabled selected>Select Priority</option>
                            <option value='low'>Low</option>
                            <option value='moderate'>Moderate</option>
                            <option value='high'>High</option>
                        </select>
                        <input type="submit" value="Add Task" className="btn" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddTodos;