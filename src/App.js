import React, { useState } from 'react';
import axios from 'axios';
import NewsList from './components/NewsList';

const App = () => {
  return (
    <div>
      <NewsList />
    </div>
  );
};

export default App;