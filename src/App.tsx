import { MouseEvent, useState } from "react";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import { createBrowserRouter, Link } from "react-router";
import { RouterProvider } from "react-router-dom";
import Menu from "./components/pages/Menu/Menu";
import Cart from "./components/pages/Cart/Cart";
import Error from "./components/pages/ErrorPage/Error";

function App() {
  const [counter, setCounter] = useState<number>(0);

  const addCouner = (e: MouseEvent) => {
    console.log(e);
  };

  return (
    <>
      <Button appearence="small" onClick={() => addCouner}>
        Кнопка
      </Button>
      <Button appearence="big" onClick={() => addCouner}>
        Кнопка
      </Button>
      <Input placeholder="Email" />

      
    </>
  );
}
export default App;
