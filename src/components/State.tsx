import { useExample } from "@/stores/example";

export default function State() {
  const state = useExample();
  return (
    <>
      <button onClick={state.incrementBears}>Incrementar</button>
    </>
  );
}
