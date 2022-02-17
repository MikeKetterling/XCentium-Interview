import { useContext, useState } from 'react'
import {Form, Button, Col} from 'react-bootstrap'
import { useNavigate } from "react-router-dom"
import { AuthContext } from '../Context/authentication';

function Login() {
    const {setCurrentUser, setIsAuthenticated} = useContext(AuthContext)
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    
    //post fetch for user login and validation
    const handleSubmit = (e) => {
        e.preventDefault();
    
        const configObj = {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(formData),
        };
    
        fetch("/login", configObj)
        .then((resp) => {
          if (resp.ok) {
            resp.json().then((user) => {
              setCurrentUser(user);
              setIsAuthenticated(true);
            })
            .then(navigate("/home"))
          } else {
            resp.json().then((errors) => {
              alert(errors.errors);
            });
          }
        });
    };


    return (
      <div className="text-center d-flex flex-column align-items-center">
        <Col lg={2}>

            <br/>

            <Form onSubmit={handleSubmit}>
              
              <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Control placeholder="Username" type="text" name="username" value={formData.username} onChange={(e) => handleChange(e)}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control placeholder="Password" type="password" name="password" value={formData.password} onChange={(e) => handleChange(e)}/>
              </Form.Group>

              <br></br>

              <Button variant="primary" type="submit">
                Submit
              </Button>

            </Form>
        </Col>
      </div>
    );
  }
  
  export default Login;