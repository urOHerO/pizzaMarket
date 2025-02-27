import Headling from "../../Headling/Headling";
import Search from "../../Search/Search";
import s from './Menu.module.css'

const Menu = () => {
  return (
    <>
      <div className={s.head}>
        <Headling>Меню</Headling>
        <Search placeholder="Введите блюдо или состав"/>
      </div>
    </>
  );
};

export default Menu;
