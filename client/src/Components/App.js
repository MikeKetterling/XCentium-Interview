import logo from '../logo.svg';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect, useState} from "react";
import {Route, Routes, useNavigate} from "react-router-dom"
import Login from './Login';
import Home from './Home';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState([]);

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

        <Route path="/" element={<Login setIsAuthenticated={setIsAuthenticated} setCurrentUser ={setCurrentUser}/>}/>

        <Route path="/home" element={<Home user={currentUser} setIsAuthenticated={setIsAuthenticated} setCurrentUser ={setCurrentUser} />}/>

      </Routes>
    </div>
  );
}

export default App;
