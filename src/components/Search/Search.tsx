import { forwardRef } from "react";
import s from "./Search.module.css";
import cn from "classnames";
import { SearchProps } from "./Search.props";

const Search = forwardRef<HTMLInputElement, SearchProps>(
  ({ className, isValid = true, ...props }, ref) => {
    return (
      <div className={s['input-wrapper']}>
        <input
          {...props}
          ref={ref}
          className={cn(className, s.input, {
            [s.invalid]: !isValid,
          })}
        />
        <img className={s.icon} src="/src/assets/Search.svg" alt="Иконка поиска" />
      </div>
    );
  }
);

export default Search;
