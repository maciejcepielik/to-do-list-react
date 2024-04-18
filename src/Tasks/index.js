import "./style.css";

const Tasks = ({ tasks, hideDone }) => (
  <ul className="tasks">
    {tasks.map(task => (
      <li key={task.id} className={`${hideDone && task.done ? "tasks__item--hidden" : "tasks__item"}`} >
        <button className="tasks__button tasks__button--done">
          {task.done ? "✔" : ""}
        </button>
        <span className={`tasks__task ${task.done ? "tasks__task--done" : ""}`}>
          {task.content}
        </span>
        <button className="tasks__button tasks__button--remove">
          🗑️
        </button>
      </li>
    ))}
  </ul >
);

export default Tasks;