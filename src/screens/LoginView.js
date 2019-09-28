import React from 'react'
import GoogleLogin from 'react-google-login'

function googleResponse(res) {
    console.log(res)
}

export default function LoginView() {
    return (
        <div>
            <h1>Login</h1>
            <GoogleLogin
                clientId="790306165997-qmd0kj4hujfhh5vd7c3dlkjnsnngjn0i.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={googleResponse}
                onFailure={googleResponse}
                cookiePolicy={'single_host_origin'}
            />
        </div>
    );
}