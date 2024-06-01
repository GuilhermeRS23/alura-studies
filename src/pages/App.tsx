import { useState } from "react";
import Form from "../components/Form";
import List from "../components/List";
import Timer from "../components/Timer";
import style from "./App.module.scss";
import { ITarefas } from "../shared/types/ITarefas";

function App() {

  const [tarefas, setTarefas] = useState<ITarefas[]>([])
  const [selecionado, setSelecionado] = useState<ITarefas>();

  function selectTarefa(tarefasSelecionada: ITarefas) {
    setSelecionado(tarefasSelecionada);
    setTarefas(oldTask => oldTask.map(task => ({
      ...task,
      selecionado: task.id === tarefasSelecionada.id ? true : false
    })))
  }

  function finishTask() {
    if (selecionado) {
      setTarefas(oldTask => oldTask.map(task => {
        if (task.id === selecionado.id) {
          return {
            ...task,
            selecionado: false,
            completado: true
          }
        }
        return task;
      }))
    }
  }

  return (
    <div className={style.AppStyle}>
      <Form aoAlterar={setTarefas} />
      <List
        tarefas={tarefas}
        selectedTask={selectTarefa}
      />
      <Timer
        selected={selecionado}
        TaskFinish={finishTask}
      />
    </div>
  );
}

export default App;
