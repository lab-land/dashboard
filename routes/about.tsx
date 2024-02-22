import State from "@/components/State";
import { useExample } from "@/stores/example";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  const state = useExample((state) => state.bears);
  
  return (
    <>
      <h2>Tu codigo</h2>
      <p>bears: {state}</p>
      <State />
    </>
  );
}
