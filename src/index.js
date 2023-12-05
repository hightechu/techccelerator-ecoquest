import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
// Bootstrap and custom style imports
// You can use any Bootstrap styles as you would in vanilla CSS/HTML
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import './index.css';

// Components imports for routing
// Each of these components is a different "page"
// You do not need to import any components that you aren't using as a "page." Notice that I did not add Login here!
import Signup from "./components/Signup";
import UserHome from "./components/UserHome";
import About from "./components/About";
import App from './App';
import AddDataSample from './components/AddDataSample';
import TitleScreen from './components/TitleScreen';
import FoodLabels from './components/FoodLabels';

import Navigation from "./components/Navigation";
import GameOverScreen from 'components/GameOverScreen';
import DndGameInside from './components/DndGameInside';
import GameNav from 'components/gamenav';
import Footer from 'components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendering your app...
// Adding navigation bar to every page. Could add a footer using the same concept
// Components rendered as pages - URL/about shows you the About component, etc...
// Add your own routes after ln 38
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <DndProvider backend={HTML5Backend}>
        < Navigation />
        <Routes>
        <Route path='/GameOverScreen' element={<GameOverScreen/>}/>
            <Route exact path='/' element={<TitleScreen/>}/>
            <Route exact path='/home' element={<UserHome/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/adddatasample' element={<AddDataSample/>}/>
            <Route path='/TitleScreen' element={<TitleScreen/>}/>
            <Route path='/FoodLabels' element={<FoodLabels/>}/>
            <Route path='/gamenav' element={<GameNav/>}/>
            <Route path='/DndGameInside' element={<DndGameInside root={root} />}/>
        </Routes>
        < Footer />
        </DndProvider>
    </BrowserRouter>
  </React.StrictMode>,
);

