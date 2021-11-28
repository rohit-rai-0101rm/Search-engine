import React,{useState} from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import {navbar} from './components/navbar'
import {footer} from './components/footer'
import {routes} from './components/routes'

function App() {
  const [darkTheme,setDarkTheme]=useState(false)
  return (
    <div className="App">
      <h1>App</h1>
    </div>
  );
}

export default App;
