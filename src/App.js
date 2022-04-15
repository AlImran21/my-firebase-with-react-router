import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Users from './components/Users/Users';
import Login from './components/Login/Login';
import UsersInfo from './components/UsersInfo/UsersInfo';
import RequireAuth from './RequireAuth/RequireAuth';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/users' element={<Users></Users>}></Route>

        <Route path='/user/:userId' element={
          <RequireAuth>
            <UsersInfo></UsersInfo>
          </RequireAuth>
        }></Route>

        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
