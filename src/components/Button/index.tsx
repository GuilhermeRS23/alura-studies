import style from "./Button.module.scss";

const Button = ({ children } : {children: React.ReactElement | string }) => {
        return (
            <button className={style.botao}>
                {children}
            </button>
        )
}

export default Button;
