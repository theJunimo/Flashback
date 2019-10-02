import React from 'react';
import { Switch, Route } from 'react-router-dom'; 
import { LoginPage, EntryPage, AlbumPage, NewAlbumPage, SettingsPage, ProfilePage } from 'pages';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path = "/" component = { LoginPage } />
        <Route exact path = "/album" component = { AlbumPage } />
      </Switch>
    </div>
  )
}

export default App;