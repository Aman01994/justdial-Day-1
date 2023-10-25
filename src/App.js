import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './Components/Layout';
import { Home } from './Pages/Home';
import { Login } from './Pages/Login';
import { Register } from './Pages/Register';
import { Detail } from './Pages/Detail';
import './Style.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}></Route>
            <Route path='login' element={<Login/>}></Route>
            <Route path='detail' element={<Detail/>}></Route>
            <Route path='register' element={<Register/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
