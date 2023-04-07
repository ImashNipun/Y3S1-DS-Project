import './App.css';
import NavBar from './components/NavBar';
import HomePage from './components/Home/HomePage';
import Footer from './components/Footer';
import ProductListPage from './components/Product/ProductListPage';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
      
      <Route path='/' element={<HomePage/>}/>
      <Route path='/shop' element={<ProductListPage/>}/>
      
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
