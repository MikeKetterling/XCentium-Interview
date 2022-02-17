import { Button } from 'react-bootstrap'
import { useNavigate } from "react-router-dom"
import logo from "../Media/mountain-banner.jpg"


function Home({user, setIsAuthenticated, setCurrentUser}) {
    const navigate = useNavigate();


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
        <h1>Hello {user.name}!</h1>
        
      </div>
    );
  }
  
  export default Home;