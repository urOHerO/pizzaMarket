import s from './ProductCard.module.css'
import { ProductCardProps } from './ProductCard.props'

const ProductCard = (props: ProductCardProps) => {
  return (
    <div className={s.card}>
      <div className={s.head} style={{backgroundImage: `url('${props.image}')`}}>
        <div className={s.price}>
          {props.price}
        </div>
        <button className={s['add-to-cart']}>
          <img src="src/assets/Cart.svg" alt="Добавить в корзину" />
        </button>
        <div className={s.rating}>
          {props.rating}
          <img src="src/assets/StarFilled.svg" alt="" />
        </div>
      </div>
      <div className={s.footer}>
        <div className={s.title}>{props.title}</div>
        <div className={s.description}>{props.description}</div>
      </div>
    </div>
  )
}

export default ProductCard