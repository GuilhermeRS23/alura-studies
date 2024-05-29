import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Button from "../Button";
import style from "./Form.module.scss";
import { ITarefas } from "../../shared/types/ITarefas";

interface FormProps {
    aoAlterar: React.Dispatch<React.SetStateAction<ITarefas[]>>
}

const Form = ({ aoAlterar }: FormProps) => {

    const [tarefas, setTarefas] = useState({
        tarefa: "",
        tempo: "00:00:00"
    });

    function addTarefa(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault();
        aoAlterar(oldTarefas =>
            [...oldTarefas,
            {
                ...tarefas,
                selecionado: false,
                completado: false,
                id: uuidv4(),
            }
            ]);
            
        setTarefas({ tarefa: "", tempo: "00:00:00" });
    };

    return (
        <form className={style.novaTarefa} onSubmit={addTarefa}>
            <div className={style.inputContainer}>
                <label htmlFor="tarefa">
                    Adicione um novo estudo
                </label>
                <input type="text"
                    name="tarefa"
                    id="tarefa"
                    value={tarefas.tarefa}
                    onChange={evento => setTarefas({ ...tarefas, tarefa: evento.target.value })}
                    placeholder="O que você quer estudar? "
                    required
                />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="tempo">
                    Tempo
                </label>
                <input type="time"
                    step="1"
                    name="tempo"
                    value={tarefas.tempo}
                    onChange={evento => setTarefas({ ...tarefas, tempo: evento.target.value })}
                    id="tempo"
                    min="00:00:00"
                    max="01:30:00"
                    required
                />
            </div>
            <Button type="submit">
                Adicionar
            </Button>
        </form>
    )
}

export default Form;
