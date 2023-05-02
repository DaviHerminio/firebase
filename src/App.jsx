import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthProvider } from './context/authContext'

import Signup from './pages/Signup'
import UserProfile from './pages/UserProfile'
import Login from './pages/Login'
import UpdateProfile from './pages/UpdateProfile'
import ForgotPassword from './pages/ForgotPassword'
import { ProtectdRoute } from './components/PrivateRoutes'
import Header from './components/Header'

function App() {


  return (
    
    <AuthProvider>
      <Header />
      <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/' element={<ProtectdRoute><UserProfile /></ProtectdRoute>}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/update-profile' element={<ProtectdRoute><UpdateProfile /></ProtectdRoute>}/>
        <Route path='/forgot-password' element={<ForgotPassword />}/>
        <Route path='*' element={
          <div>
            <h1>Rota não encontrada</h1>
          </div>
        }/>
      </Routes>
      
      </BrowserRouter>
      
    </AuthProvider>
    
    
  )
}

export default App
