import React from 'react';
import './App.css';
// import Navbar from './components/Navbar';
// import Navbar2 from './components/Navbar2';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import History from './pages/History';
import Products from './pages/Products';
import Stamp from './pages/Stamp';
import PopupSuccess from './pages/PopupSuccess';
import PhotoReceipt from './pages/PhotoReceipt';
import Scan from './pages/Scan';
import Loginlotus from './pages/Loginlotus';
import Navbar from './components/Navbar';
import Navbar2 from './components/Navbar2';


function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/history' component={History} />
          <Route path='/products' component={Products} />
          <Route path='/stamp' component={Stamp} />
          <Route path='/popupsuccess' component={PopupSuccess} />
          <Route path='/photoreceipt' component={PhotoReceipt} />
          <Route path='/scan' component={Scan} />
          <Route path='/loginlotus' component={Loginlotus} />
          <Route path='/navbar2' component={Navbar2} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
