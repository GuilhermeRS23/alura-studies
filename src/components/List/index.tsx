import style from "./List.module.scss";
import ListItems from "./ListItems";
import { ITarefas } from "../../shared/types/ITarefas";

interface ListProps {
    tarefas: ITarefas[]
    selectedTask: (tarefasSelecionada: ITarefas) => void
}

const List = ({ tarefas, selectedTask }: ListProps) => {

    return (
        <aside className={style.listaTarefas}>
            <h2>Estudo do dia</h2>
            <ul>
                {tarefas.map((item) => (
                    <ListItems
                        selectedTask={selectedTask}
                        key={item.id}
                        {...item}
                    // {...item}   Será importado todos os itens do object
                    />
                ))}
            </ul>
        </aside>
    )
}

export default List;
