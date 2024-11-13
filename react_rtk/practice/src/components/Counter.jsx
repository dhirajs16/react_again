import { useSelector } from "react-redux";
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
} from "../features/counter/counterSlice";
import Button from "./Button";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);

  return (
    <div className="p-10 w-1/2 h-screen mx-auto flex flex-col items-center justify-center gap-5">
      <div className="text-2xl font-bold font-mono">{count}</div>

      <Button color="green" action={increment()} work = '+' />
      <Button color="red" action={decrement()} work = '-' />
      <Button color="blue" action={reset()} work = 'Reset' />
      <Button color="green" action={incrementByAmount(20)} work='Add 20' />
    </div>
  );
};

export default Counter;
