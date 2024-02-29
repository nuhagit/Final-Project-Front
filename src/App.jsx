import './App.css'
import Header from './Components/Header/Header'
import Sidebar from './Components/Sidebar/Sidebar'
import Content from './Components/Content/Content'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
    <Header />
    <Sidebar />
    <Content />
    </>
  )
}

export default App
