import logo from './logo.svg';
import './App.css';
import Header from './Componenets/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Componenets/Home/Home';
import SignUp from './Componenets/Auth/SignUp';
import SignIn from './Componenets/Auth/SignIn';
import Calendar from './Componenets/Calendar/Calendar';
import SingleTask from './Componenets/Home/SingleTask';

function App() {
  return (
    <div >
     <Header></Header>
     <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      {/* <Route path='/:id' element={<SingleTask></SingleTask>}></Route> */}
      <Route path='/calendar' element={<Calendar></Calendar>}></Route>
      <Route path='/sign-up' element={<SignUp></SignUp>}></Route>
      <Route path='/sign-in' element={<SignIn></SignIn>}></Route>
     </Routes>
     
    </div>
  );
}

export default App;
