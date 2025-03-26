import { NavLink, Outlet, useNavigate } from "react-router-dom";
import s from "./MenuLayout.module.css";
import Button from "../../components/Button/Button";
import cn from "classnames";

const MenuLayout = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("jwt");
    navigate("/auth/login");
  };
  return (
    <div className={s.layout}>
      <div className={s.sidebar}>
        <div className={s.user}>
          <img
            src="src/assets/avatar.png"
            alt="Ваш аватар"
            className={s.avatar}
          />
          <div className={s.name}>Ильдар Рашитов</div>
          <div className={s.email}>rashitov.cool@yandex.ru</div>
        </div>
        <div className={s.menu}>
          <NavLink
            to="/"
            className={({ isActive }) => cn(s.link, { [s.active]: isActive })}
          >
            <img src="src/assets/Menu.svg" alt="Иконка меню" />
            Меню
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              cn(s.link, {
                [s.active]: isActive,
              })
            }
          >
            <img src="src/assets/Cart.svg" alt="Иконка корзины" />
            Корзина
          </NavLink>
        </div>
        <Button className={s.exit} onClick={logout}>
          <img src="src/assets/Exit.svg" alt="Иконка выхода" />
          Выйти
        </Button>
      </div>
      <div className={s.content}>
        <Outlet />
      </div>
    </div>
  );
};

export default MenuLayout;
