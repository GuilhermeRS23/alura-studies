import style from "./Button.module.scss";

interface ButtonProps{
    children: React.ReactElement | string 
    type?: "submit" | "reset" | "button" | undefined
}

const Button = ({ children, type = "button" } : ButtonProps) => {
        return (
            <button className={style.botao} type={type}>
                {children}
            </button>
        )
}

export default Button;
