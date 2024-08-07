import React, {useState} from "react";
// import Form from "react-bootstrap/Form";
import { Button} from 'react-bootstrap';



function Login({setShow}) {
    const [showLogin, setShowLogin] = useState(true);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = async () => {
        try {
          const myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");
          let result = await fetch("http://localhost:4000/api/user/login", {
            method: "POST",
            headers: myHeaders,
            body: JSON.stringify({

                email: email,
                password: password
            }),
          });
    
          let data = await result.json();
          if(data.success){
            localStorage.setItem("token",data.token)
            setShow(false)
          }
          console.log(data, "data after login");
        } catch (error) {


            console.log(error)
        }
      };

     return showLogin ? (
<div className="flex">
    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="write your email here"/>
    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="write your password here"/>
    <Button onClick={login}>Login</Button>
  <p onClick={() => setShowLogin(false)}>Don't have an account</p>
</div>
     ) : (
     <div className="flex">
        <input type="text" placeholder="write your name here"/>
          <input type="text" placeholder="write your email here"/>
    <input type="password" placeholder="write your password here"/>
    <Button>Create account</Button>
  <p onClick={() => setShowLogin(true)}>Already have an account</p>
     </div>
     );
}

export default Login;