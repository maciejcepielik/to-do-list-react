import "./style.css";

const Tasks = ({ tasks, hideDone, removeTask }) => (
  <ul className="tasks">
    {tasks.map(task => (
      <li key={task.id} className={`${hideDone && task.done ? "tasks__item--hidden" : "tasks__item"}`} >
        <button className="tasks__button tasks__button--done">
          {task.done ? "✔" : ""}
        </button>
        <span className={`tasks__task ${task.done ? "tasks__task--done" : ""}`}>
          {task.content}
        </span>
        <button 
        onClick={() => removeTask(task.id)}
        className="tasks__button tasks__button--remove">
          🗑️
        </button>
      </li>
    ))}
  </ul >
);

export default Tasks;