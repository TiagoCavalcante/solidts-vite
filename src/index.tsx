import "./index.css"

import { render } from "solid-js/web"
import { createSignal, JSX } from "solid-js"

const Button = (props: JSX.IntrinsicElements["button"]) => {
  return (
    <button
      type="button"
      class="bg-blue-400 border border-black rounded w-10 h-10 text-xl"
      {...props}
    />
  )
}

const App = () => {
  const [count, setCount] = createSignal(0)
  const increment = () => setCount((count) => count + 1)

  return (
    <div class="flex items-center justify-center h-screen">
      <Button onClick={increment}>{count}</Button>
    </div>
  )
}

render(App, document.getElementById("app")!)
