import React from 'react';
import QuizBox from './components/QuizBox';
import HomeEndComponent from './components/HomeEndCom';
import ColoredTable from './components/ResultTable';
import Register from './components/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<QuizBox />}></Route>
          <Route path='/logout' element = {<ColoredTable/>}></Route>
          <Route path='/register' element={<Register />}></Route>
      </Routes>
    </BrowserRouter>
      {/* <QuizBox />
      <HomeEndComponent /> 
      <ColoredTable /> */}
    </div >
  );
}

export default App;
