import { ButtonProps } from "./Button.props";
import s from "./Button.module.css";
import cn from "classnames";

const Button = ({ children, className, appearence, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(s.button, s.accent, className, {
        [s.small]: appearence === "small",
        [s.big]: appearence === "big",
      })}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
