import { useState } from "react";
import { ITarefas } from "../../shared/types/ITarefas";
import Button from "../Button";
import Clock from "./Clock";
import style from "./Timer.module.scss";
import { timeToSeconds } from "../../common/utils/date";

interface Props {
    selected: ITarefas | undefined
}

const Timer = ({ selected }: Props) => {
    const [tempo, setTempo] = useState<Number>()
    if (selected?.tempo) {
        setTempo(timeToSeconds(selected?.tempo))
    }

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}> Escolha um card e inicie o cronômetro </p>
            <div className={style.relogioWrapper}>
                <Clock />
            </div>
            <Button>
                Começar!
            </Button>
        </div>
    )
}

export default Timer;
