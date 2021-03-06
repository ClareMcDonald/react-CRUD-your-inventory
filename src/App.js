// import { getQueriesForElement } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink, Redirect } from 'react-router-dom';
import { logout } from './services/fetch-utils';
import './App.css';
import AuthPage from './AuthPage';
import ListPage from './ListPage';
import CreatePage from './CreatePage';
import UpdatePage from './UpdatePage';

function App() {
  const [user, setUser] = useState(localStorage.getItem('supabase.auth.token'));
  
  // do not need useEffect here
  
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
              <NavLink to="/restaurants" className="navlink">List Page</NavLink>
              <NavLink to="/create" className="navlink">Create Page</NavLink>
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
            <Route exact path="/create">
              {
                user
                  ? <CreatePage />
                  : <Redirect to="/" />
              }
            </Route>
            <Route exact path="/restaurants/:id">
              {
                user
                  ? <UpdatePage />
                  : <Redirect to="/" />
              }
            </ Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
