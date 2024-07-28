import { ButtonsArrangement, ButtonsButton } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
  <ButtonsArrangement>
    {tasks.length > 0 && (
      <>
        <ButtonsButton
          onClick={toggleHideDone}
          className="buttons__button"
        >
          {hideDone ? "Pokaż" : "Ukryj"} ukończone
        </ButtonsButton>
        <ButtonsButton
          onClick={setAllDone}
          className="buttons__button"
          disabled={tasks.every(({ done }) => done)}
        >
          Ukończ wszystkie
        </ButtonsButton>
      </>
    )}
  </ButtonsArrangement >
);

export default Buttons;