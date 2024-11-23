import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from '../Home'
import NotFound from '../NotFound'

function App() {

  return (
    // <Home></Home>
    <BrowserRouter basename="/" future={{ v7_startTransition: true }}>
      <Routes>
        <Route path="/reservas" element={<Home />}>
        </Route>
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
