import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useContext, useEffect} from "react";
import {NavLink, Route, Routes} from "react-router-dom"
import Login from './Login';
import Home from './Home';
import { AuthContext } from '../Context/authentication';

function App() {
  const {setCurrentUser, isAuthenticated, setIsAuthenticated} = useContext(AuthContext)
  useEffect(() => {
    fetch("/me").then((resp) => {
      if (resp.ok) {
        resp.json().then((user) => {
          setCurrentUser(user);
          setIsAuthenticated(true);
        });
      }
    });
  }, []);

console.log(isAuthenticated)

  
  return (
    <div className="App">
      <Routes>

        <Route path="/" element={<Login />}/>

        {isAuthenticated ? <Route path="/home" element={<Home />}/> : null}

        <Route path="*" element={<NavLink exact to="/">Return to Login</NavLink>}/>
      </Routes>
    </div>
  );
}

export default App;
