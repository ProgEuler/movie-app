import React from 'react'
import { Home } from './pages/Home'
import { Route, Routes } from 'react-router-dom';
import { Favorites } from './pages/Favorites';
import { NavBar } from './components/NavBar';
import './css/App.css';

const App = () => {
  return (
    <div>
        <NavBar/>
    <main className='container mx-auto bg-gray-500'>
        <div>
            <h1>Movie App</h1>
            <p>Welcome to the Movie App! Here you can find your favorite movies.</p>
        </div>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/favorites' element={<Favorites/>} />
        </Routes>
    </main>
    </div>
  );
}
export default App;
