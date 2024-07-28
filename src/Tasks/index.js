import { List, Item, Task, TasksButton } from "./styled";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
  <List>
    {tasks.map(task => (
      <Item
        key={task.id}
        hidden={task.done && hideDone}
      >
        <TasksButton
          toggleDone
          onClick={() => toggleTaskDone(task.id)}
        >
          {task.done ? "✔" : ""}
        </TasksButton>
        <Task
          done={task.done}
        >
          {task.content}
        </Task>
        <TasksButton
          remove
          onClick={() => removeTask(task.id)}
        >
          🗑️
        </TasksButton>
      </Item>
    ))}
  </List >
);

export default Tasks;