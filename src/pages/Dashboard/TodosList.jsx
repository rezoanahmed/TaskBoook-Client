import { useContext, useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import { FirebaseContext } from "../../context/AuthContext";


const TodosList = () => {
    const {user} = useContext(FirebaseContext);
    const axiosPublic = useAxios();
    const [todos, setTodos] = useState();
    useEffect(()=>{
        axiosPublic.get(`/todos?email=${user?.email}`)
        .then(result=>{
            setTodos(result.data);
        })
    })
    return (
        <div>
            <div>
                <h1 className="text-2xl font-medium">Todos</h1>
                <ul className="list-disc p-4">
                    {
                        todos?.map(element=><li key={element._id} className="">
                            <p className="text-2xl font-medium" title={element.description}>{element.title}</p>
                            {/* <p className="text-xl">{element.description}</p> */}
                            <p>Deadline: {element.deadline_time} {element.deadline} Priority: {element.priority}</p>
                        </li>)
                    }
                </ul>
                
            </div>
        </div>
    );
};

export default TodosList;