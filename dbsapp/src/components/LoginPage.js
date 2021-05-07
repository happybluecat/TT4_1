const LoginPage = () => {

    return (
        <div>
                <h1>Login</h1>
                
            <form className ='login-form' >
                <div className = 'form-control'>
                    <label>Username</label>
                    <input type ='text' placeholder='Username' ></input>
                </div>
                <div className = 'form-control'>
                    <label>Password</label>
                    <input type ='text' placeholder='Password'></input>
                </div>
            <input type ='submit' value = 'Login' ></input>
            </form>
        </div>
    )
}

export default LoginPage;