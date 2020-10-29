import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Catalog from '../pages/Catalog';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={Catalog} />
  </Switch>
);

export default Routes;
