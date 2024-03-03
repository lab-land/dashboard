import { useCounter } from '@/stores/counter'

export default function Button() {
  const { decrement, increment } = useCounter()

  return (
    <div flex="~ justify-center gap-4 items-center">
      <button className="bg-blue px-6 hover:drop-shadow" onClick={increment}>
        Increment
      </button>
      <button className="bg-red px-6" onClick={() => decrement(2)}>
        Decrement
      </button>
      <button className="border-2 border-blue-200 rounded bg-blue-400 px-4 py-2 text-sm text-white font-light font-mono dark:bg-blue-500 hover:bg-blue-500 dark:hover:bg-blue-600">
        Button
      </button>
      <button
        bg="blue-400 hover:blue-500 dark:blue-500 dark:hover:blue-600"
        sm="text-green"
        md="text-black"
        font="mono light"
        p="y-2 x-4"
        border="2 rounded blue-200"
      >
        Button
      </button>
    </div>
  )
}
