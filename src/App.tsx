import Background from './components/Background'
import Footer from './sections/Footer'
import Navbar from './sections/Navbar'
import "./scss/index.scss"
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {


  return (
    <>
      <div className="main-container">
      <Background />
      <BrowserRouter>
          <div className="app">
            <Navbar />
            <Routes>
              <Route element={<Search />} path="/search" />
              <Route element={<MyList />} path="/list" />
              <Route element={<About />} path="/about" />
              <Route element={<Compare />} path="/compare" />
              <Route element={<Pokemon />} path="/pokemon/:id" />
              <Route element={<Navigate to="/pokemon/1" />} path="*" />
            </Routes>
            <Footer />
          </div>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
