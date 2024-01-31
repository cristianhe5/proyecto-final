
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import ProductIdPage from './pages/ProductIdPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import HeaderNav from './components/shared/HeaderNav'
import CartPage from './pages/CartPage'
import ProtectedRoutes from './pages/ProtectedRoutes'
import PurchasePage from './pages/PurchasePage'

function App() {

  
  

  return (
    <div>
      <HeaderNav />
      <Routes>
        <Route path = '/' element={<HomePage />}/>
        <Route path='/product/:id' element={<ProductIdPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route element={<ProtectedRoutes />}>
          <Route path='/cart' element={<CartPage />} />
          <Route path='/purchases' element={<PurchasePage/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
