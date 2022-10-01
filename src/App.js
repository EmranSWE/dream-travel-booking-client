import logo from './logo.svg';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About';
import Footer from './Pages/Shared/Footer/Footer';
import SignUp from './Pages/Shared/SignUp/SignUp';
import Login from './Pages/Shared/Login/Login';
import SinglePlace from './Pages/SinglePlace/SinglePlace';
import ManageTopPlace from './Pages/Home/ManageTopPlace/ManageTopPlace';
import AddPlace from './Pages/Home/AddPlace/AddPlace';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/addplace' element={<AddPlace></AddPlace>}></Route>
        <Route path='/manage' element={<ManageTopPlace></ManageTopPlace>}></Route>
        <Route path='/topplace/:id' 
        element={<SinglePlace></SinglePlace>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
