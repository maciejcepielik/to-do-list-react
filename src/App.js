import { useEffect, useState } from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Main from "./Main";
import { ThemeProvider } from "styled-components";
import { initialTasks } from "./initialTasks";

const theme = {
  breakpoints: {
    mobile: 768
  },
};

const storedTasks = () => {
  const localStorageTasks = localStorage.getItem('tasks');

  return (
    localStorageTasks
      ? JSON.parse(localStorageTasks)
      : initialTasks
  )
};

function App() {
  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone)
  };

  const useTasks = () => {
    const [tasks, setTasks] = useState(storedTasks);

    useEffect(() => {
      localStorage.setItem("tasks", JSON.stringify(tasks))
    }, [tasks]);

    const removeTask = (id) => {
      setTasks(tasks => tasks.filter(task => task.id !== id))
    };

    const toggleTaskDone = (id) => {
      setTasks(tasks => tasks.map(task => {
        if (task.id === id) {
          return { ...task, done: !task.done };
        }

        return task;
      }));
    };

    const setAllDone = () => {
      setTasks(tasks => tasks.map(task => ({
        ...task,
        done: true
      })));
    };

    const addNewTask = (content) => {
      setTasks(tasks => [
        ...tasks,
        {
          content,
          done: false,
          id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
        }
      ])
    };

    return {
      tasks,
      removeTask,
      toggleTaskDone,
      setAllDone,
      addNewTask,
    };
  };

  const {
    tasks,
    removeTask,
    toggleTaskDone,
    setAllDone,
    addNewTask,
  } = useTasks();

  return (
    <ThemeProvider theme={theme}>
      <Main>
        <Header title="Lista zadań" />
        <Section
          title="Dodaj nowe zadanie"
          body={<Form addNewTask={addNewTask} />}
        />
        <Section
          title="Lista zadań"
          body={
            <Tasks
              tasks={tasks}
              hideDone={hideDone}
              removeTask={removeTask}
              toggleTaskDone={toggleTaskDone}
            />
          }
          extraHeaderContent={
            <Buttons
              tasks={tasks}
              hideDone={hideDone}
              toggleHideDone={toggleHideDone}
              setAllDone={setAllDone}
            />
          }
        />
      </Main>
    </ThemeProvider>
  );
}

export default App;
