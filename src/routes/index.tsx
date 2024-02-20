import Button from '@/components/Button'
import { useCounter } from '@/stores/counter'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  const counter = useCounter((state) => state.counter)
  return (
    <div className="p-2">
      <h3>Welcome Home! TanStack Router</h3>
      <p>{counter}</p>
      <Button />
    </div>
  )
}
