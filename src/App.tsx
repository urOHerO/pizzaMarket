import { MouseEvent, useState } from "react";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";

function App() {
  const [counter, setCounter] = useState<number>(0)

  const addCouner = (e: MouseEvent) => {
    console.log(e);
  }

  return (
    <>
      <Button appearence="small" onClick={() => addCouner}>Кнопка</Button>
      <Button appearence="big" onClick={() => addCouner}>Кнопка</Button>
      <Input placeholder="Email"/>
    </>
  );
}
export default App;
