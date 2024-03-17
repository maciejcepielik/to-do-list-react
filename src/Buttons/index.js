import "./style.css";

const Buttons = ({ tasks, hideDoneTasks }) => (

    <div className="buttons">
        {tasks.length > 0 && (
            <>
                <button className="buttons__hideComplete">
                    {hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
                </button>
                <button
                    className="buttons__hideComplete"
                    disabled={tasks.every(({ done }) => done)}
                >
                    Ukończ wszystkie
                </button>
            </>
        )}
    </div >
);

export default Buttons;