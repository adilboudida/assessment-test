import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Layout from './components/Layout';
import Users from './pages/Users';
import Products from './pages/Products';
import './styles/globals.css';

function App() {
  return (
    <AppProvider>
      <Router>
        <Layout>
          <Switch>
            <Route path="/users" component={Users} />
            <Route path="/products" component={Products} />
            <Route path="/" exact component={Users} />
          </Switch>
        </Layout>
      </Router>
    </AppProvider>
  );
}

export default App;