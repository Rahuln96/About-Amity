import logo from './logo.svg';
import './App.css';
import './style.css';
import Header from './Component/Header/Header'
import Footer from './Component/Header/Footer'
import Home from './Component/MainComponent/Home'
import About from './Component/MainComponent/About'
import Contact from './Component/MainComponent/Contact'
import Service from './Component/MainComponent/Service'
import Signup from './Component/MainComponent/Signup'
import Portfolio from './Component/MainComponent/Portfolio'
import Login from './Component/MainComponent/Login'
import Ba from './Courses/Ba'
import Ballb from './Courses/Ballb'
import Bba from './Courses/Bba'
import Bca from './Courses/Bca'
import Bcom from './Courses/Bcom'
import Btech from './Courses/Btech'
import { useState } from 'react';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
     const [ user, setLoginUser] = useState({})
  return (
       <BrowserRouter>
       <Header />
          <Routes>
               <Route path='/' element = { user && user._id ? <Home setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>} />
               <Route path='/About' element = {<About />} />
               <Route path='/Contact' element = {<Contact />} />
               <Route path='/Service' element = {<Service />} />
               <Route path='/Signup' element = {<Signup />} />
               <Route path='/Portfolio' element = {<Portfolio />} />
               <Route path='/Login' element = {<Login setLoginUser={setLoginUser}/>} />
               <Route path='/ba' element = {<Ba />} />
               <Route path='/Ballb' element = {<Ballb />} />
               <Route path='/Bba' element = {<Bba />} />
               <Route path='/Bca' element = {<Bca />} />
               <Route path='/Bcom' element = {<Bcom />} />
               <Route path='/Btech' element = {<Btech />} />
            

          </Routes>
       
       <Footer />
       </BrowserRouter>
  );
}

export default App;
