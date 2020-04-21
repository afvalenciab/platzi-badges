import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from 'pages/Home';
import Badges from 'pages/Badges';
import BadgeNew from 'pages/BadgeNew';
import Layout from './Layout';
import BadgeEdit from 'pages/BadgeEdit';
import BadgeDetailsContainer from 'pages/BadgeDetailsContainer';
import NotFound from './NotFound';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/badges" component={Badges} exact />
          <Route path="/badges/new" component={BadgeNew} exact />
          <Route path="/badges/:badgeId/edit" component={BadgeEdit} exact />
          <Route path="/badges/:badgeId" component={BadgeDetailsContainer} exact />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
