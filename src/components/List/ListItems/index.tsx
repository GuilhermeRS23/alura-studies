import { ITarefas } from "../../../shared/types/ITarefas";
import style from "../ListItems/ListItem.module.scss";

interface Props extends ITarefas {
    selectedTask: (tarefasSelecionada: ITarefas) => void
}

const ListItems = ({ completado, id, selecionado, tarefa, tempo, selectedTask }: Props) => {
    return (
        <li className={`${style.item} ${selecionado ? style.itemSelecionado : ""} 
        ${completado ? style.itemCompletado : ""}`}
            onClick={() => !completado && (selectedTask({
                completado,
                id,
                selecionado,
                tarefa,
                tempo
            }))}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
            {completado && <span className={style.concluido}
                aria-label="Tarefa Concluída"></span>}
        </li>
    )
}

export default ListItems;
