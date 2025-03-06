import Headling from "../../Headling/Headling";
import Search from "../../Search/Search";
import s from "./Menu.module.css";
import { useEffect, useState } from "react";
import { PREFIX } from "../../../helpers/API";
import { Product } from "../../../interfaces/product.interface";
import axios, { AxiosError } from "axios";
import { MenuList } from "./MenuList/MenuList";

const Menu = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | undefined>()

  const getMenu = async () => {
    try {
      setIsLoading(true)
      // await new Promise<void>(resolve => {
      //   setTimeout(() => {
      //     resolve()
      //   }, 1000)
      // })
      const { data } = await axios.get<Product[]>(`${PREFIX}products`)
      setProducts(data)
      setIsLoading(false)
    } catch (error) {
      console.log(error)
      setIsLoading(false)
      if(error instanceof AxiosError) {

        setError(error.message)
      }
      return
    }
    // try {
    //   const res = await fetch(`${PREFIX}products`);
    //   if (!res.ok) {
    //     return;
    //   }
    //   const data = (await res.json()) as Product[];
    //   setProducts(data);
    // } catch (error) {
    //   console.log(error);
    //   return
    // }
  };

  useEffect(() => {
    getMenu();
  }, []);

  return (
    <>
      <div className={s.head}>
        <Headling>Меню</Headling>
        <Search placeholder="Введите блюдо или состав" />
      </div>
      <div className={s.body}>
        {error && <>{error}</>}
        {!isLoading && <MenuList products={products} />}
        {isLoading && <>Загружаем продукты...</>}
      </div>
    </>
  );
};

export default Menu;
