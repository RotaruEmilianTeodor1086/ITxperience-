
import './Login.css';
import Notes4You from './Notes4You';
import React, { useContext, useEffect, useState } from 'react'

const Login=() =>{
const [isActive,setIsActine]= useState(true) ; 
const [username,setUsername] = useState('') ; 
const [password,setPassword] = useState('') ; 
const handleButtonLogin = ()=>{
  let ok =false ; 
  console.log(username) ; 
  let value= username.substring(username.lastIndexOf("@")+1) ; 
  if(value === "stud.ase.ro" && password ==="nota10"){
    ok= true ; 
  }
  if(ok){
    setIsActine(false) ; 
  }
  else{
    alert('Acest cont nu exista!') ; 
  }

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
            <button  class="btn btn-primary btn-block btn-large"  onClick={handleButtonLogin} >Log in</button>
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