
import './Login.css';
import Notes4You from './Notes4You';
import React, { useContext, useEffect, useState } from 'react'

const Login=() =>{
const [isActive,setIsActine]= useState(true) ; 
const [username,setUsername] = useState('') ; 
const [password,setPassword] = useState('') ; 
const handleButtonLogin = ()=>{

  setIsActine(false) ; 
}

const hanlerUsernameChange= (e)=>{
  setUsername(e.target.value); 
}
const hanlerPasswordChange= (e)=>{
  setPassword(e.target.value); 
}

if(isActive){
  return(
    <div> 
      <form>
      <div class="login">
      <h1>Login</h1>           
          <input type="text"  placeholder="Username" required="required" onChange={hanlerUsernameChange} />
            <input type="password"  placeholder="Password" required="required" onChange={hanlerPasswordChange} />
            <button type="submit" class="btn btn-primary btn-block btn-large"  onClick={handleButtonLogin} >Let me in.</button>
      </div>
      </form>
    
      </div>
    ) 
}
else{
  return(
    <div>
      <Notes4You username ={username} />

    </div>

  )

}

}
export default Login