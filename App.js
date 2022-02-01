import './App.css';
import HeaderComponent from './HeaderComponent';
import React from 'react';
import FooterComponent from './FooterComponent';
import IssueListComponent from './components/IssueListComponent';
import AboutUsComponent from './components/AboutUsComponent';
import { BrowserRouter as Router,Route, Routes} from 'react-router-dom';

function App() {
  return (
  <Router>
  <HeaderComponent/>
  <Routes>
  <Route exact path="/explore" element={<IssueListComponent/>}/>
  <Route exact path="/aboutus" element={<AboutUsComponent/>}/> 
  </Routes>
  <FooterComponent/>
  </Router>
  );   
}

export default App;
