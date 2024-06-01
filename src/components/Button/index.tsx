import style from "./Button.module.scss";

interface ButtonProps {
    children: React.ReactElement | string
    type?: "submit" | "reset" | "button" | undefined
    click?: () => void
}

const Button = ({ children, type = "button", click }: ButtonProps) => {
    return (
        <button onClick={click} className={style.botao} type={type}>
            {children}
        </button>
    )
}

export default Button;
