import React, { useEffect, useState } from 'react';
import './App.scss';
import {
    Switch,
    Route,
    useHistory
} from "react-router-dom";
import Register from './Register/Register';
import Login from './Login/Login';
import PostCreate from './PostCreate/PostCreate';
import { UserContext } from './user-context';
import { UserService } from './services/user-service';
import Menu from './Menu/Menu';

function App() {
  const [user, setUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
      async function getUser() {
          const user = await UserService.get();
          setUser(user);
          if (!user) {
              history.push('/login');
          }
      }
      getUser();
  }, [history]);

  return (

    <UserContext.Provider value={{user, setUser}}>
        <div className="d-flex flex-column flex-sm-column-reverse vh-100">
            <div className="container mt-4 flex-grow-1">
                <Switch>
                    <Route path="/register">
                        <Register />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/post/create">
                        <PostCreate />
                    </Route>
                    <Route path="/">
                        Home!
                    </Route>
                </Switch>
            </div>
            <Menu />
        </div>
    </UserContext.Provider>

  );
}

export default App;
