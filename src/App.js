import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './Components/Layout';
import { Home } from './Pages/Home';
import { Login } from './Pages/Login';
import { Register } from './Pages/Register';
import { Detail } from './Pages/Detail';
import './Style.css'
import { Adminpanel } from './Pages/Adminpanel';
import { BusinessRegister } from './Pages/BusinessRegister';
import { NotFound } from './Pages/NotFound';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}></Route>
            {
            window.localStorage.getItem('Token')== null && 
            <Route path='login' element={<Login/>}></Route> 
            }
            <Route path='detail' element={<Detail/>}></Route>
            <Route path='register' element={<Register/>}></Route>
            <Route path='adminpanel' element={<Adminpanel />}></Route>
            {
            window.localStorage.getItem("Token")!== null  &&
            <Route path='business_register' element={<BusinessRegister />}></Route>
            }
          </Route>
          <Route path='*' element={<NotFound/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
