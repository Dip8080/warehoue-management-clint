
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Error from './Pages/Error/Error';
import Footer from './Pages/Footer/Footer';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';

import ProductInfo from './Pages/ProductInfo/ProductInfo';
import Registration from './Pages/Regintratrion/Registration';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/service/:userId' element={<ProductInfo></ProductInfo>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Registration></Registration>}></Route>
        <Route path='*' element={<Error></Error>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
