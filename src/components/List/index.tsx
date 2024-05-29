import style from "./List.module.scss";
import ListItems from "./ListItems";
import { ITarefas } from "../../shared/types/ITarefas";

const List = ({ tarefas }: { tarefas: ITarefas[] }) => {

    return (
        <aside className={style.listaTarefas}>
            <h2>Estudo do dia</h2>
            <ul>
                {tarefas.map((item, index) => (
                    <ListItems
                        key={index}
                        {...item}
                    // {...item}   Será importado todos os itens do object
                    />
                ))}
            </ul>
        </aside>
    )
}

export default List;
