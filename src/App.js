import React from 'react'
import './App.css';
// import Sidebar from './Components/Sidebar/Sidebar'
import {BrowserRouter as Router} from 'react-router-dom';
// import Body from './Components/Body/Body'
// import Profile from './Components/Body/Profile'
// import {Settings, Venue, Department} from './Components/Body/Settings'
import Header from './Components/Header/Header';
import Body from './Components/Content/Body';
function App() {
  return (
    <Router>
      <Header />
      <Body />
      {/* <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/Settings/venue" element={<Venue />} />
        <Route path="/Settings/Department" element={<Department />} />
      </Routes> */}
    </Router>
  );
}

export default App;
