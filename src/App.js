import React,{useState} from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import {Navbar} from './components/Navbar'
import {Footer} from './components/Footer'
import {Routes} from './components/Routes'

function App() {
  const [darkTheme,setDarkTheme]=useState(false)
  return (
    <div className={darkTheme?'dark':''}>
     
      
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
      <Navbar setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
        <Footer/>
        <Routes/>

      </div>

    </div>
  );
}

export default App;
