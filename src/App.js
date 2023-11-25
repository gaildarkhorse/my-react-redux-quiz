import React from 'react';
import QuizBox from './components/QuizBox';
import HomeEndComponent from './components/HomeEndCom';
import ColoredTable from './components/ResultTable';
import Register from './components/Register';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Register/>}></Route>
        </Routes>
      </BrowserRouter>
      {/* <QuizBox />
      <HomeEndComponent /> 
      <ColoredTable /> */}
    </div>
  );
}

export default App;
