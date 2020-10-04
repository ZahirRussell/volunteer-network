import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Container } from 'react-bootstrap';
import { faGoogle } from "@fortawesome/free-brands-svg-icons"
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import { initializeLoginFramework, handleGoogleSignIn} from './LoginManager';
import * as firebase from "firebase/app";
import "firebase/auth";

const Login = () => {

  
    initializeLoginFramework();
  
    const [loggedInUser, setLoggedInUser ] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
  
    const googleSignIn = () => {
        handleGoogleSignIn()
        .then(res => {
          handleResponse(res, true);
        })
    }

    const handleResponse = (res, redirect) =>{
        setLoggedInUser(res);
        if(redirect){
            history.replace(from);
        }
      }

    return (
        <div style={{marginTop:'100px'}} className="d-flex justify-content-center align-items-center">
             <div className="col-1">
             </div>
             <div className="col-6 text-center"> 

            <div className="container">   
                 <section>				
                 <Container className="text-center text-white">
                  <div className="bg-dark rounded" id="login">
                  <Button className="btn-danger rounded-pill" onClick={googleSignIn}>
                            <FontAwesomeIcon icon={faGoogle}/> 
                            &nbsp; Sign in with Google
                          </Button>                                           
                  </div>
              </Container> 
                 </section>
             </div>
             <div className="col-1">
             </div>
         </div>
       </div>
    );
};

export default Login;