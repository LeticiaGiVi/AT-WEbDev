import './App.css'
import Menu from './Componentes/menu/menu'
import { Outlet } from 'react-router-dom'
function App() {
  
  return (
    <>
    <Menu/>
<Outlet/>

</>

  )
}

export default App
