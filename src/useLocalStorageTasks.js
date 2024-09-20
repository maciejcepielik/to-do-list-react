import { useEffect, useState } from "react";
import { initialTasks } from "./initialTasks";

export const useLocalStorageTasks = () => {
    const storedTasks = () => {
        const localStorageTasks = localStorage.getItem('tasks');

        return (
            localStorageTasks
                ? JSON.parse(localStorageTasks)
                : initialTasks
        )
    };

    const [tasks, setTasks] = useState(storedTasks);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }, [tasks]);

    return [tasks, setTasks];
};