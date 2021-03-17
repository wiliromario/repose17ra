import { Button } from 'react-bootstrap';
import React, { useState } from 'react';
import GoogleLogin from 'react-google-login';

const Tes5 = () => {
    const [name, setName] = useState()
    const [isLogin, setIsLogin] = useState(false)

    if(isLogin){
        return(
            <div style ={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: '100vh',
                flexDirection:"column"
            }}>
                <p>
                    {`Halo ${name}, jangan lupa bahagia hari ini~`}
                </p>
                <Button onClick={()=>setIsLogin(false)}>
                    Logout
                </Button>
            </div>
        )
    }else{
        return(
            <div style ={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: '100vh',
                flexDirection:"column"
            }}>
                <GoogleLogin
                    clientId={'876694988298-frsnd1qdb5ubu6gstp4t0mi25h7t55m9.apps.googleusercontent.com'}
                    buttonText="Log in with Google"
                    onSuccess={(res)=>{
                        setName(res.Is.sd)
                        setIsLogin(true)
                    }}
                    onFailure={(res)=>alert("Terjadi Kesalahan di Server, Silakan diulang")}
                    cookiePolicy={'single_host_origin'}
                />
            </div>
        )
    }
}

export default Tes5