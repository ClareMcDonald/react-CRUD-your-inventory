import { getQueriesForElement } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink, Redirect } from 'react-router-dom';
import './App.css';
import AuthPage from './AuthPage';

function App() {
  const [user, setUser] = useState(localStorage.getItem('supabase.auth.token'));

  useEffect(() => {
    async function fetch() {
      const user = await getUser();
    }
  }, []);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
      
        </header>
        <main>
          <Switch>
            <Route exact path="/">
              {
                user
                  ? <Redirect to='/restaurants' />
                  : <AuthPage />
              }
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
