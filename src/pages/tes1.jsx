import axios from 'axios';
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Tes1 = () => {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [showPassword, setShowPassword] = useState(false)
    const [isError, setIsError] = useState('')
    const [isLogin,setIsLogin] = useState(false)
    const [isRegister,setIsRegister] = useState(false)

    const clickLoginFunc = (e) => {
        e.preventDefault()
        axios.post('https://reqres.in/api/login',{
            email,
            password
        })
        .then((res) => {
            setPassword()
            setIsLogin(true)
        }).catch((err) => {
            if(err.response){
                setIsError((err.response.data.error+' !').toUpperCase())
            }else{
                setIsError(('PLEASE CHECK YOUR INTERNET CONNECTION.'))
            }
            
            console.log(err.response)
        })
    }
    const clickRegisterFunc = (e) => {
        e.preventDefault()
        axios.post('https://reqres.in/api/register',{
            email,
            password
        })
        .then((res) => {
            setPassword()
            setIsRegister(true)
        }).catch((err) => {
            if(err.response){
                setIsError((err.response.data.error+' !').toUpperCase())
                console.log(err.response)
            }else{
                setIsError(('PLEASE CHECK YOUR INTERNET CONNECTION.'))
            }
        })
    }

    const ShowError = () => {
        return(
            <p style={{marginTop:'10px', color:"red", fontWeight:700}}>
                {isError}
            </p>
        )
    }

    if(isLogin){
        return(
            <div style ={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: '100vh',
                flexDirection:"column"
            }}>
                <p>Welcome {email.toUpperCase()+" !"}</p>
                <p style={{fontWeight:700, cursor:"pointer"}} 
                onClick={()=>{
                    setEmail()
                    setIsLogin(false)
                    }}>
                    Logout
                </p>
            </div>
        )
    }
    if(isRegister){
        return(
            <div style ={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: '100vh',
                flexDirection:"column"
            }}>
                <p>Hey, {email.toUpperCase()+" Welcome Aboard !"}</p>
                <p style={{fontWeight:700, cursor:"pointer"}} 
                onClick={()=>{
                    setEmail()
                    setIsRegister(false)
                    }}>
                    Logout
                </p>
            </div>
        )
    }
    return(
        <div data-test="container" style ={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: '100vh',
            flexDirection:"column"
        }}>
            <div>
                <Link to="/">
                    <p> 
                        {"< Back"}
                    </p>
                </Link>
            </div>
            <div style = {{
                width: '500px',
                border: 'solid 1px black',
                borderRadius: '10px',
                padding: '10px'
            }}>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" 
                        onChange={(e) => {
                            setIsError('')
                            setEmail(e.target.value)}
                        }/>
                        <Form.Text className="text-muted">
                        <span>Login (email: eve.holt@reqres.in, password: cityslicka)<br></br></span>
                        <span>Register (email: eve.holt@reqres.in, password: pistol)<br></br></span>
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type={showPassword?"text":"password"} placeholder="Password" 
                        onChange={(e) => {
                            setIsError('')
                            setPassword(e.target.value)}
                        }/>
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Show Password" 
                        onChange={(e)=> setShowPassword(e.target.checked)}/>
                    </Form.Group>
                    <Button data-test="btn-login" variant="primary" type="submit" onClick={(e)=>clickLoginFunc(e)}>
                        Login
                    </Button>
                    <Button data-test="btn-register" variant="primary" type="submit" style={{marginLeft:'10px'}} onClick={(e)=>clickRegisterFunc(e)}>
                        Register
                    </Button>
                    <ShowError/>
                </Form>
            </div>
        </div>
    )
}

export default Tes1