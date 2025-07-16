
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css'
import MainComponent  from './MainComponent'
import NavBar from './Components/NavBar/NavBarComponent'
import FooterComponent from './Components/Footer/FooterComponent';



function App() {
  

  return (
    <>
      <BrowserRouter>
      <NavBar />
        <Routes>
           <Route path="/" element={<MainComponent />} />
          <Route path="/about" element={<h1>About Page</h1>} />
          <Route path="/contact" element={<h1>Contact Page</h1>} />
        </Routes>
        <FooterComponent />
      </BrowserRouter>

    </>
  )
}

export default App
