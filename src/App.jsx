import './App.css'
import Header from './DRY/Header.jsx'
import Footer from './DRY/Footer.jsx'

import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App