import React from 'react';
import QuizBox from './components/QuizBox';
import HomeEndComponent from './components/HomeEndCom';
import ColoredTable from './components/ResultTable';

function App() {
  return (
    <div className="App">
      <QuizBox />
      <HomeEndComponent /> 
      <ColoredTable />
    </div>
  );
}

export default App;
