import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './login.component.css'

const Login = () =>{
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated")|| false))


  const userData  = {
    username: 'user1',
    password: 'pass1'
  }

  function checkForm() {
    return user.length > 0 && password.length > 0;
  }

  function submitForm(e) {
    e.preventDefault();

    if(userData.username===user && userData.password===password){
    setAuthenticated(true)
    localStorage.setItem("authenticated", true);
    navigate("/home")
    console.log("Successfully Loggedin!")
  } else { return (alert ('User not found!'))}
  }
return(

<div className='login-page'>
        
        <form onSubmit={submitForm} className='login-form'>
        <h1>LOGIN</h1>
          <div className='input-cont'>
            <label>Username: </label>
            <input
              type='text'
              placeholder='Enter Username'
              value={user}
              required
              onChange={(e) => setUser(e.target.value)}
            ></input>
          </div>
          <div className='input-cont'>
            <label>Password: </label>
            <input
              type='password'
              placeholder='Enter Password'
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <div className='submit-button'>
           
            <button type='submit' disabled={!checkForm} className='button-7'>
              Log In
            </button>
         
          </div>
        </form>
      </div>

      )
 }

 export default Login

