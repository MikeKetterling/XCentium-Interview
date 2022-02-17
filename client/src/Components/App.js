import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useContext, useEffect} from "react";
import {NavLink, Route, Routes} from "react-router-dom"
import Login from './Login';
import Home from './Home';
import { AuthContext } from '../Context/authentication';

function App() {
  //state in context
  const { setCurrentUser, isAuthenticated, setIsAuthenticated } = useContext(AuthContext)

  //fetch for current user
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


  return (
    <div className="App">
      <Routes>

        <Route path="/" element={<Login />}/>

        {/* if unauthorized home component does not exist */}
        {isAuthenticated ? <Route path="/home" element={<Home />}/> : null}

        <Route path="*" element={<NavLink exact to="/">Return to Login</NavLink>}/>
      </Routes>
    </div>
  );
}

export default App;
