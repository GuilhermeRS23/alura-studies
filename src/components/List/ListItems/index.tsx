import style from "../List.module.scss";

const ListItems = ({ tarefa, tempo } : { tarefa:String , tempo:String}) => {
    return (
        <li className={style.item}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
        </li>
    )
}

export default ListItems;
