//import { Router } from 'react-router-dom';
import '../App.scss';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Usuarios from './pages/Usuarios';
import Alumnos from './pages/Alumnos';
import Contactos from './pages/Contactos';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function Home () {
    return (
      <nav>
        <Navbar />
        <div className='flex'>
            <Sidebar />
        </div>
      </nav>
    )
  }
  
  export default Home;