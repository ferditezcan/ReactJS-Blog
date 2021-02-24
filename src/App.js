import React from 'react';
import Navigation from './components/navigation'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Algos from './pages/Home/algos'
import Cloud from './pages/Home/cloud'
import Health from './pages/Home/health'
import Home from './pages/Home/home'
import Login from './pages/Home/login'
import Post from './pages/Home/post'
import WebDev from './pages/Home/web-dev'
import EditPost from './pages/Home/home'
import PostDetail from './pages/Home/post-detail';
import AdminLogin from './pages/Admin/admin-login';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/admin">
            <Route path='/admin/admin-login' component={AdminLogin} />

          </Route>
          <Route path='/' >
            <Navigation />
            <Route path='/algos' component={Algos} />
            <Route path='/cloud' component={Cloud} />
            <Route path='/health' component={Health} />
            <Route path='/login' component={Login} />
            <Route path='/post/:id' component={Post} />
            <Route path="/web-dev" component={WebDev} />
            <Route path="/edit-post" component={EditPost} />
            <Route path="/post-detail" component={PostDetail} />
            <Route path='/' component={Home} />
            <Route component={() => 404} />

          </Route>
          

        </Switch>

      </div>
    </Router>
  );
}

export default App;
