
import { Outlet } from 'react-router-dom'
import './App.css'
import Mainlayout from './Layout/MainLayout/Mainlayout'

function App() {


  return (
    <>
      <Mainlayout>
        <Outlet />
      </Mainlayout>
    </>
  )
}

export default App
