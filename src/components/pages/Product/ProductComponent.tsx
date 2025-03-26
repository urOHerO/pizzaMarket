import { Await, useLoaderData } from "react-router-dom";
import { Product } from "../../../interfaces/product.interface";
import { Suspense } from "react";

const ProductComponent = () => {
  const data = useLoaderData() as {data: Product};
  return <>
  <Suspense fallback={"Загрузка..."}>
    <Await resolve={data.data}>
      {(data: Product ) => (
        <>Этот продукт называется: {data.name}</>
      )}
    </Await>
  </Suspense></>
};

export default ProductComponent;
