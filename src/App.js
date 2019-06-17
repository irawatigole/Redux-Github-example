import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Root from './containers/Root';
import configureStore from './store/configureStore';

const store = configureStore();

function App() {
  return (
    <Router>
      <Root store={store}/>
    </Router>
  );
}

export default App;
