
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'
import Registro from './pages/registro'


function App() {
  return (

    <>
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Registro />} />
        <Route path="/registro" element={<Login />} />

      </Routes>
    </>
  )
}

export default App
