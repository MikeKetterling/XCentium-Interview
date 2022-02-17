import { useContext } from 'react';
import { Button } from 'react-bootstrap'
import { useNavigate } from "react-router-dom"
import { AuthContext } from '../Context/authentication';
import logo from "../Media/mountain-banner.jpg"


function Home() {
    const {setCurrentUser, setIsAuthenticated, currentUser} = useContext(AuthContext)
    const navigate = useNavigate();

    //deleting session id for previous current user
    const handleLogout = () => {
        fetch('/logout', {method: "DELETE"})
        .then(res => {
              if (res.ok) {
                setCurrentUser(null)
                setIsAuthenticated(false)
            }
        })
        .then(navigate("/"))
    }

    return (
      <div className="Login">
        <Button onClick={handleLogout}>Logout</Button>
        <br/>
        <div>
            <img src={logo} alt="wrench"/>
        </div>
        <h1>Hello {currentUser.name}!</h1>
        
      </div>
    );
  }
  
  export default Home;