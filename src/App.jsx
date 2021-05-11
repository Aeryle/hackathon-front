import React from 'react';
import Mainpage from './mainpage/mainpage.jsx';
import './App.css';
import { QueryClientProvider, QueryClient } from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Mainpage />
      </QueryClientProvider>
    </div>
  );
}

export default App;
