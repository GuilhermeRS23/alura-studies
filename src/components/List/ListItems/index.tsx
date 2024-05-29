import { ITarefas } from "../../../shared/types/ITarefas";
import style from "../List.module.scss";

const ListItems = ({ completado, id, selecionado, tarefa, tempo }: ITarefas) => {
    return (
        <li className={style.item}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
        </li>
    )
}

export default ListItems;
