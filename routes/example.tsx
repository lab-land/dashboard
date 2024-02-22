import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/example")({
  component: ExamplePage,
});

function ExamplePage() {
  return (
    <>
      <h2>Example without src folder</h2>
    </>
  );
}
