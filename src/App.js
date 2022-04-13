
import './App.css';
import Footer from './Page/Shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import About from './Page/About/About';
import Home from './Page/Home/Home/Home';
import Header from './Page/Shared/Header/Header';
import ServiceDetail from './Page/ServiceDetail/ServiceDetail';
import NotFound from './Page/Shared/NotFound/NotFound';
import Login from './Page/Login/Login/Login';
import Register from './Page/Login/Register/Register';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/service/:serviceId' element={<ServiceDetail></ServiceDetail>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
