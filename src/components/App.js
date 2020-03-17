import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './Header';
import AddPost from './posts/AddPost';
import EditPost from './posts/EditPost';
import PostDetail from './posts/PostDetail';
import PostList from './posts/PostList';

import '../styles/App.css';

export class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <div>
            <Switch>
              <Route path="/" exact component={PostList} />
              <Route path="/post/add" exact component={AddPost} />
              <Route path="/post/edit/:id" exact component={EditPost} />
              <Route path="/post/:id" exact component={PostDetail} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
