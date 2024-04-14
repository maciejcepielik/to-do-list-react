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

const hideDoneTasks = false;

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
          <Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />}
        extraHeaderContent={
          <Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />}
      />
    </Main>
  );
}

export default App;
