// import { getQueriesForElement } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink, Redirect } from 'react-router-dom';
import { getUser, logout } from './services/fetch.utils';
import './App.css';
import AuthPage from './AuthPage';
import ListPage from './ListPage';

function App() {
  const [user, setUser] = useState(localStorage.getItem('supabase.auth.token'));
  
  // useEffect(() => {
  //   function fetchUser() {
  //     const newUser = getUser();

  //     setUser(newUser);
  //   }

  //   fetchUser();
  // }, []);
  
  async function handleLogout() {
    logout();

    setUser('');
  }

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          {
            user &&
            <>
              <NavLink to="/restaurants">List Page</NavLink>
              <NavLink to="/create">Create Page</NavLink>
              <button onClick={handleLogout}>Log Out</button>
            </>
          }
        </header>
        <main>
          <Switch>
            <Route exact path="/">
              {
                user
                  ? <Redirect to="/restaurants" />
                  : <AuthPage setUser={setUser}/>
              }
            </Route>
            <Route exact path="/restaurants">
              {
                user
                  ? <ListPage />
                  : <Redirect to="/" />
              }
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
