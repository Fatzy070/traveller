import { Outlet } from 'react-router-dom'
import Navbar from './navigations/NavBar'
import Footer from './footer/Footer'

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />  {/* This is where page components will render */}
      <Footer />
    </div>
  )
}

export default Layout