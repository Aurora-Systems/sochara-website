import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import Home from './Pages/Home'
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'
import OurStory from './Pages/OurStory'
import Shop from './Pages/Shop'
import Blog from './Pages/Blog'
import ContactUs from './Pages/ContactUs'
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className='container-fluid socharaBackgroundColor'>
    <NavBar/>
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="our-story" element={<OurStory/>}/>
      <Route path="shop" element={<Shop/>}/>
      <Route path="blog" element={<Blog/>}/>
      <Route path="contact-us" element={<ContactUs/>}/>
    </Routes>
   </BrowserRouter>
   <br/>
   
   </div>
   <Footer/>
  </React.StrictMode>
)
