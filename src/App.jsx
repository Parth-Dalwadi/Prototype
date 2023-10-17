import './App.css'
import Home from './Home'
import About from './About'
import Missing from './Missing'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
      <div className='App'>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />}></Route> 
            <Route exact path="/about" element={<About />}></Route>
            <Route path="*" element={<Missing />}></Route>
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
