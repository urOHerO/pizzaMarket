import Headling from "../../Headling/Headling";
import Search from "../../Search/Search";
import s from "./Menu.module.css";
import ProductCard from "../../ProductCard/ProductCard";

const Menu = () => {
  return (
    <>
      <div className={s.head}>
        <Headling>Меню</Headling>
        <Search placeholder="Введите блюдо или состав" />
      </div>
      <div className={s.body}>
        <ProductCard
          id={1}
          title="Наслаждение"
          description="Салями, руккола, помидоры, оливки"
          image="src/assets/pizza2.png"
          price={300}
          rating={4.5}
        />
      </div>
    </>
  );
};

export default Menu;
