import React from 'react';
import {
  Route,
  Redirect,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import ApplicationDashboard from './Container/application_dashboard/application_dashboard';

function App() {
  return (
    <Router>
      <Switch>
        <Route
          path="/dashboard/weather"
          component={ApplicationDashboard}>
        </Route>
        <Route exact path='/'
          render={() =>
            <Redirect to='/dashboard/weather' />} />
      </Switch>
    </Router>
  );
}

export default App;
