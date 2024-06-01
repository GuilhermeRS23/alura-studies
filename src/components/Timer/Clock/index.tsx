import style from './Clock.module.scss';

interface Props {
    timerClock: number | undefined
}

const Clock = ({ timerClock = 0 }: Props) => {
    const minutes = Math.floor(timerClock / 60);
    const seconds = timerClock % 60;

    const [minutesDezena, minutesUnidade] = String(minutes).padStart(2, "0")
    const [secondsDezena, secondsUnidade] = String(seconds).padStart(2, "0")


    return (
        <>
            <span className={style.relogioNumero}>{minutesDezena}</span>
            <span className={style.relogioNumero}>{minutesUnidade}</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>{secondsDezena}</span>
            <span className={style.relogioNumero}>{secondsUnidade}</span>
        </>
    )
}

export default Clock;
