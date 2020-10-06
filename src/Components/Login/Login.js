import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Alert, Button, Container } from 'react-bootstrap';
import { faGoogle } from "@fortawesome/free-brands-svg-icons"
import { useContext } from 'react';
import { UserContext } from '../../App';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { initializeLoginFramework, handleGoogleSignIn} from './LoginManager';
import * as firebase from "firebase/app";
import "firebase/auth";
import './Login.css';

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
        <div className="d-flex justify-content-center align-items-center">
             <div className="col-1">
             </div>
             <div className="col-6 text-center"> 
            	<div className="container d-flex align-items-center justify-content-center py-5 my-5">
                <div className="login-form p-md-5 p-3">
                  <h3 className="mb-5 font-weight-bold text-dark">Login With</h3>
                  <button className="btn btn-outline-secondary rounded-pill" onClick={googleSignIn}>
                  <span className="text-danger font-weight-bold"> <FontAwesomeIcon icon={faGoogle}/> &nbsp;
                    Continue with Google</span>
                  </button>
                  <span className="mt-3">
                    <span>Don’t have an account?</span>
                    <Link to="/login" className="text-decoration-none">&nbsp; Create an account</Link>
                  </span>
                </div>
              </div>
             <div className="col-1">
             </div>
         </div>
       </div>
    );
};

export default Login;