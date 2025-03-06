import { useLoaderData } from "react-router";
import { Product } from "../../../interfaces/product.interface";

const ProductComponent = () => {
  const data = useLoaderData() as Product;
  return <div>Этот продукт называется: {data.name}</div>;
};

export default ProductComponent;
