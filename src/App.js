
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Blog from './Pages/Blog/Blog';
import Error from './Pages/Error/Error';
import Footer from './Pages/Footer/Footer';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home/Home';
import ServiceDetails from './Pages/Home/Services/ServiceDetails/ServiceDetails';
import Login from './Pages/Login/Login';
import ManageInventory from './Pages/ManageInventory/ManageInventory';
import Myitem from './Pages/MyItem/Myitem';
import NewItem from './Pages/NewItem/NewItem';

import ProductInfo from './Pages/ProductInfo/ProductInfo';
import Registration from './Pages/Regintratrion/Registration';
import RequireAuth from './Pages/RequireAuth/RequireAuth';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/inventory/:userId' element={
          <RequireAuth>
            <ProductInfo></ProductInfo>
            </RequireAuth>
        }></Route>
        <Route path='/manage' element={
          <RequireAuth>
            <ManageInventory></ManageInventory>
            </RequireAuth>
        }></Route>
        <Route path='/additem' element={
          <RequireAuth>
            <NewItem></NewItem>
            </RequireAuth>
        }></Route>
        <Route path='/myitem' element={
          <RequireAuth>
            <Myitem></Myitem>
            </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/register' element={<Registration></Registration>}></Route>
        <Route path='*' element={<Error></Error>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
