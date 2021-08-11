import React from 'react';
import Sidebar from './components/Sidebar';
// import Chat from './components/Chat';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="app_body">
        <Sidebar/>
        {/* <Chat/> */}
            {/* <Router>
              <Sidebar/>
              <Switch>
                <Route path="/rooms/:roomId">
                  <Chat/>
                </Route>
                <Route path="/">
                  <Chat/>
                </Route>              
              </Switch>            
            </Router> */}
          </div>
    </div>
  );
}

export default App;
