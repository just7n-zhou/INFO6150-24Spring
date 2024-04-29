import { useState } from 'react'

import './css/App.css'

import Header from './Header'
import MainArea from './MainArea'
import Footer from './Footer'

function App() {

  const [page, setPage] = useState('/')

  return (
    <div className='app'>
      <Header setPage={setPage}/>
      <MainArea page={page}/>
      <Footer/>
    </div>
  )
}

export default App
