import { FaCheck, FaTrash } from "react-icons/fa";
import useAxios from "../../hooks/useAxios";
import Swal from "sweetalert2";


const TodosCard = ({ todo }) => {
    const { title, deadline, description, deadline_time, _id } = todo;
    const axiosPublic = useAxios();
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.delete(`/todos/${_id}`)
                    .then(result => {
                        if (result) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Task has been deleted.",
                                icon: "success"
                            });
                        }
                    })

            }
        });



    }
    return (
        <div>
            <div className="p-4 m-2 rounded-md shadow-xl bg-[#191919] flex flex-col gap-2">
                <p className="text-xl font-medium">{title}</p>
                <p className="text-sm">{description}</p>
                <p>{deadline} {deadline_time}</p>
                <div className="flex gap-2">
                    <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-error">
                        <FaTrash></FaTrash>
                    </button>
                    <button className="btn btn-circle btn-success">
                        <FaCheck></FaCheck>
                    </button>
                </div>

            </div>
        </div>
    );
};

export default TodosCard;