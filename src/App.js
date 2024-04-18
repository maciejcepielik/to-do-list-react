import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Main from "./Main";

const tasks = [
  { id: 1, content: "wyprowadzić psa na spacer", done: true },
  { id: 2, content: "pójść na trening", done: false },
  { id: 3, content: "dokończyć projekt", done: false },
];

const hideDone = false;

function App() {
  return (
    <Main>
      <Header title="Lista zadań" />

      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
      />

      <Section
        title="Lista zadań"
        body={
          <Tasks tasks={tasks} hideDone={hideDone} />}
        extraHeaderContent={
          <Buttons tasks={tasks} hideDone={hideDone} />}
      />
    </Main>
  );
}

export default App;
