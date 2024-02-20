import { useCounter } from "@/stores/counter";

export default function Button() {
  const { decrement, increment } = useCounter();

  return (
    <div flex="~ justify-center gap-4 items-center">
      <button className="bg-blue hover:drop-shadow px-6" onClick={increment}>
        Increment
      </button>
      <button className="bg-red px-6" onClick={() => decrement(2)}>
        Decrement
      </button>
    </div>
  );
}
