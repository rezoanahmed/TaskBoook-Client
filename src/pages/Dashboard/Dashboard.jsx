import AddTodos from "./AddTodos";
import Completed from "./Completed";
import DashboradNav from "./DashboradNav";
import Ongoing from "./Ongoing";
import TodosList from "./TodosList";

const Dashboard = () => {
    return (
        <div>
            <DashboradNav></DashboradNav>
            <AddTodos></AddTodos>
            <div className="grid grid-cols-1 md:grid-cols-3 p-4 md:p-10 gap-4 md:gap-10">
                <TodosList></TodosList>
                <Ongoing></Ongoing>
                <Completed></Completed>
            </div>
        </div>
    );
};

export default Dashboard;