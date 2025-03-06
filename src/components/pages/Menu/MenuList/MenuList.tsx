import { MenuListProps } from "./MenuList.props";
import ProductCard from "../../../ProductCard/ProductCard";
import s from "./MenuList.module.css";

export function MenuList({ products }: MenuListProps) {
  return (
    <div className={s.wrapper}>
      {products.map((prod) => (
        <ProductCard
          key={prod.id}
          id={prod.id}
          name={prod.name}
          description={prod.ingridients.join(", ")}
          image={prod.image}
          price={prod.price}
          rating={prod.rating}
        />
      ))}
    </div>
  );
}
