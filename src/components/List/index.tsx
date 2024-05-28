import style from "./List.module.scss";
import ListItems from "./ListItems";

const List = () => {
    const tarefas = [{
        tarefa: 'React',
        tempo: '02:00:00'
    },
    {
        tarefa: 'JavaScript',
        tempo: '01:00:00'
    },
    {
        tarefa: 'TypeScript',
        tempo: '01:00:00'
    }]

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
