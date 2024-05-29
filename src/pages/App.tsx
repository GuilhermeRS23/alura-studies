import { useState } from "react";
import Form from "../components/Form";
import List from "../components/List";
import Timer from "../components/Timer";
import style from "./App.module.scss";
import { ITarefas } from "../shared/types/ITarefas";

function App() {

  const [tarefas, setTarefas] = useState<ITarefas[]>([])

  return (
    <div className={style.AppStyle}>
      <Form aoAlterar={setTarefas}/>
      <List tarefas={tarefas} />
      <Timer />
    </div>
  );
}

export default App;
