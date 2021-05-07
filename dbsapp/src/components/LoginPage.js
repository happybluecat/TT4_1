import { useState } from 'react'
import axios from 'axios';
import { setUserSession } from './api/Common';

const LoginPage = (props) => {
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    if (!username ) {
      alert('Please insert a userName / password')
      return
    }

    setUserName('')
    setPassword('')
  }

  const handleLogin = () => {
    setError(null);
    setLoading(true);
    axios.post('http://localhost:4000/users/signin', { username: username.value, password: password.value }).then(response => {
      setLoading(false);
      setUserSession(response.data.token, response.data.user);
      props.history.push('/dashboard');
    }).catch(error => {
      setLoading(false);
      if (error.response.status === 401) setError(error.response.data.message);
      else setError("Something went wrong. Please try again later.");
    });
  }

    return (
        <div>
            <h1>Login</h1>
            <form className ='login-form' onSubmit={onSubmit} >
                <div className = 'form-control'>
                    <label>Username</label>
                    <input type ='username' placeholder='Username' value={username} onChange={(e) => setUserName(e.target.value)} ></input>
                </div>
                <div className = 'form-control'>
                    <label>Password</label>
                    <input type ='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
                </div>
            <input type ='submit' value = 'Login' onClick={handleLogin}></input>
            </form>
        </div>
    )
}

export default LoginPage;