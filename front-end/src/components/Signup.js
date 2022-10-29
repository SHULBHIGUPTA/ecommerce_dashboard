import React, {useState, useEffect} from 'react';
import { useNavigate} from 'react-router-dom';

const Signup = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("")
    const navigate = useNavigate();
    useEffect(() => {
        const auth = localStorage.getItem('user');
        if(auth)
        {
            navigate('/')
        }
    }, [])
    const collectData = async () => {
        console.log(name, email, password);
        let result = await fetch('http://localhost:5000/register', {
            method:'post',
            headers: {
                'Content-Type': 'application/json',
                authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
            },
            body: JSON.stringify({
               name, email, password
                }),
           
        });
        result = await result.json();
        console.log(result);
        localStorage.setItem("user", JSON.stringify(result.result));
        localStorage.setItem("token", JSON.stringify(result.auth));
        navigate('/')  
    }
    return(
        <div className="signup">
         <h1>Register</h1>
        <input className="inputBox" type="text" value={name} onChange={e => setName(e.target.value)} placeholder='enter name'/>
        <input className="inputBox" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder='enter email'/>
        <input className="inputBox" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="enter password"/>
        <button type="button" onClick={collectData}>signup</button>
        </div>
    )
}

export default Signup;