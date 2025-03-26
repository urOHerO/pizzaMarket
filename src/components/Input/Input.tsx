import { forwardRef } from "react";
import s from "./Input.module.css";
import cn from "classnames";
import { InputProps } from "./Input.props";

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, isValid = true, ...props }, ref) => {
    return (
      <div>
        <input
          {...props}
          ref={ref}
          className={cn(className, s.input, {
            [s.invalid]: !isValid,
          })}
        />
      </div>
    );
  }
);

export default Input;
