import Hello from "./components/Hello"
import { BrowserRouter } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Hello color='red' person='Dorothy' />
      <Hello color='blue' person='Zelda' />
      <Hello color='green' person='Tallulah' />
    </BrowserRouter>
  )
}

export default App
