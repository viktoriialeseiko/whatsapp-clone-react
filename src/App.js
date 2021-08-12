import React from 'react';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
// import Login from './components/Login';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// import {useStateValue} from './StateProvider';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="app_body">
        <Router>
          <Sidebar/>
          <Switch>
            <Route path="/rooms/:roomId">
              <Chat/>
            </Route>
            <Route path="/">
              <Chat/>
            </Route>              
          </Switch>            
        </Router>
      </div>
    </div>
  );
}

export default App;
