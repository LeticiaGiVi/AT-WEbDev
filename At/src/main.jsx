import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import{createBrowserRouter,RouterProvider} from 'react-router-dom'
import Sobre from './Pages/Sobre.jsx'
import Contato from './Pages/Contato.jsx'
import Home2 from './Pages/Home.jsx'


 
const router = createBrowserRouter([
{
 
  path:'/',
  element:<App/>,
  children:[
    {index:true, element:<Home2/>},
    {path:'/Sobre',element: <Sobre/>},
    {path:'/Contato',element: <Contato/>},
  ]
 
}
])
 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<RouterProvider router={router}/>
  </React.StrictMode>,
)
