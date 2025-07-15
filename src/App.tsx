
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css'
import MainComponent  from './MainComponent'



function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
           <Route path="/" element={<MainComponent />} />
          <Route path="/about" element={<h1>About Page</h1>} />
          <Route path="/contact" element={<h1>Contact Page</h1>} />
        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
