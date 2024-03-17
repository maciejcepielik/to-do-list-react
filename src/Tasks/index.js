import "./style.css";

const Tasks = ({ tasks, hideDoneTasks }) => (
  <ul className="checkList__allTasks">
    {tasks.map(task => (
      <li key={task.id} className={`${hideDoneTasks && task.done ? "checkList__item--hidden" : "checkList__item"}`} >
        <button className="checkList__button checkList__button--done">
          {task.done ? "✔" : ""}
        </button>
        <span className={`checkList__task ${task.done ? "checkList__task--done" : ""}`}>
          {task.content}
        </span>
        <button className="checkList__button checkList__button--remove">
          🗑️
        </button>
      </li>
    ))}
  </ul >
);

export default Tasks;