
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Preview from './pages/Preview'
// import Button from './ui/Button'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='m-0 p-0'>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/preview" element={<Preview />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
