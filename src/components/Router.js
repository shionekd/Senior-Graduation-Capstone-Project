import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './Home'
import About from './About'
import Area from './Area'
import Spot from './Spot'
import Shop from './Shop'
import Photo from './Photo'
import Climbing from './Climbing'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/area" element={<Area/>}/>
        <Route exact path="/spot" element={<Spot/>}/>
        <Route exact path="/shop" element={<Shop/>}/>
        <Route exact path="/photo" element={<Photo/>}/>
        <Route exact path="/climbing" element={<Climbing/>}/>
      </Routes>
    </Router>
  );
}

export default App;