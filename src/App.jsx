import './App.css'
import Login from './components/Login'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import GetDetails from './components/Getdetails'
import NavBar from './components/NavBar'
import Logout from './components/Logout'
import Dashboard from './components/Dashboard'
import Register from './components/Register'
import Home from './components/Home'
import GetAllPasswords from './components/GetAllPasswords'
import SavePassword from './components/SavePassword'
import LoginDirection from './components/LoginDirection'

function App() {

  return (
    <>
   
    <BrowserRouter>
   
    <Routes>
    <Route path='/' element={ <Login />} />
      <Route path='/login' element={ <Login />} />
      <Route path='/getdetails' element={<GetDetails/>} />
      <Route path='/logout'  element={<Logout />}/>
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/allpasswords' element={<GetAllPasswords/>} />
      <Route path='/savepassword' element={<SavePassword/>} />
      <Route path='/loginDirection' element={<LoginDirection/>} />

    </Routes>
    
    </BrowserRouter>
    
     </>
  )
}

export default App
