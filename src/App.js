import './App.css';
import Navbar from './component/Navbar';
import Aboutus from './component/Aboutus';
import Skills from './component/skills';
import Home from './component/Home';
import Contact from './component/Contact';
import Footer from './component/Footer';
import{BrowserRouter,Route,Routes} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Navbar />
       <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Aboutus' element={<Aboutus />} />
        <Route path='/Skills' element={<Skills />} />
        <Route path='/Contact' element={<Contact />} />
       </Routes>
       <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
