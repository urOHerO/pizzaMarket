import { Link } from "react-router";
import s from "./ProductCard.module.css";
import { ProductCardProps } from "./ProductCard.props";

const ProductCard = (props: ProductCardProps) => {
  return (
    <Link to={`/product/${props.id}`} className={s.link}>
      <div className={s.card}>
        <div
          className={s.head}
          style={{ backgroundImage: `url('${props.image}')` }}
        >
          <div className={s.price}>
            {props.price}&nbsp;
            <span className={s.currency}>₽</span>
          </div>
          <button className={s["add-to-cart"]}>
            <img src="src/assets/Cart.svg" alt="Добавить в корзину" />
          </button>
          <div className={s.rating}>
            {props.rating}&nbsp;
            <img src="src/assets/StarFilled.svg" alt="Иконка звезды" />
          </div>
        </div>
        <div className={s.footer}>
          <div className={s.title}>{props.name}</div>
          <div className={s.description}>{props.description}</div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
