import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./Login";
import Header from "./Header";
import Home from "./Home";
import Friends from "./Friends";
import FriendDetails from "./FriendDetails";
import User from "./User";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [createPost, setCreatePost] = useState(false);

  function handleCreatePostClick() {
    setCreatePost(!createPost);
  }

  return (
    <>
      <Switch>
        <Route path="/login">
          <Login setIsLoggedIn={setIsLoggedIn} />
        </Route>

        <Route exact path="/">
          <Header onCreatePostClick={handleCreatePostClick} />
          <Home isLoggedIn={isLoggedIn} createPost={createPost} />
        </Route >

        <Route exact path="/friends/:id">
          <Header />
          <FriendDetails />
        </Route>

        <Route path="/friends">
          <Header />
          <Friends />
        </Route>

        <Route path="/user">
          <Header />
          <User />
        </Route>
      </Switch>
    </>
  );
}

export default App;
