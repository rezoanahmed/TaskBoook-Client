import { useContext, useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import { FirebaseContext } from "../../context/AuthContext";
import TodosCard from "./TodosCard";


const Completed = () => {
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
                <h1 className="text-2xl font-medium">Completed</h1>
                {
                    todos?.map(element=> element.status=="completed"? <TodosCard key={element._id} todo={element}></TodosCard> : <></>)
                }
                
            </div>
        </div>
    );
};

export default Completed;