import { useState } from 'react'
import './App.css'

import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import AppRoutes from './Routes/AppRoutes'

function App() {
  const [numero, setNumero] = useState()
  return(
    <>
      <main className='h-screen max-h-screen flex flex-col overflow-hidden bg-base-100'>  
        <Navbar cantidad={numero}/>
        <section className='grid grid-cols-[200px_1fr] gap-4 pb-4 p-2 overflow-hidden h-full'>
          <div className='h-full overflow-hidden rounded-box p-0'>
            <Sidebar />
          </div>
          <div className='flex-1 h-full overflow-y-auto pr-1'>

            <AppRoutes setCarrito={setNumero}></AppRoutes>

          </div>
        </section>
        <Footer />
      </main>
    </>
  )
}

export default App
