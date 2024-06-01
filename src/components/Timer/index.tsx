import { useEffect, useState } from "react";
import { ITarefas } from "../../shared/types/ITarefas";
import Button from "../Button";
import Clock from "./Clock";
import style from "./Timer.module.scss";
import { timeToSeconds } from "../../common/utils/date";

interface Props {
    selected: ITarefas | undefined
    TaskFinish: () => void
}

const Timer = ({ selected, TaskFinish }: Props) => {
    const [time, setTime] = useState<number>()

    useEffect(() => {
        if (selected?.tempo) {
            setTime(timeToSeconds(selected?.tempo))
        }
    }, [selected])

    function regressiva(t: number = 0) {
        setTimeout(() => {
            if (t > 0) {
                setTime(t - 1)
                return regressiva(t - 1)
            }
            TaskFinish();
        }, 1000)
    }

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}> Escolha um card e inicie o cronômetro </p>
            <div className={style.relogioWrapper}>
                <Clock
                    timerClock={time} />
            </div>
            <Button click={() => regressiva(time)}>
                Começar!
            </Button>
        </div>
    )
}

export default Timer;
