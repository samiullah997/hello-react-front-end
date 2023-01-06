import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Greeting from './Greeting';
import store from './redux/config/store';

const App = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Greeting />} />
        </Routes>
      </div>
    </Router>
  </Provider>
);

export default App;
