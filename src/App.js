import React from 'react'
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
// import Header from './Components/Header/Header';
// import Body from './Components/Content/Body';
import Admin from './Pages/Admin';


function App() {
  return (
    <Router>
      <Admin />
      {/* <Header /> */}
    </Router>
  );
}

export default App;
