import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { ReactQueryDevtools } from 'react-query/devtools';

import Mainpage from './mainpage/mainpage.jsx';
import Boss from './components/Boss';

import './App.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Mainpage} />
          <Route path="/boss/:bossId" component={Boss} />
        </Switch>
      </HashRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
