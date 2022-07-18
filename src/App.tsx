import React from 'react';
import './App.css';
import { Sidebar } from './Sidebar';

import { Room } from './Room';


function App() {
  return (
    <div className="App">
      <div className='app_body'>
      <Sidebar/>
      <Room/>
      </div>
    </div>
  );
}

export default App;
