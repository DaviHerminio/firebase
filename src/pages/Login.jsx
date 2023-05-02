import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';

const Login = () => {
    const {signIn} = useAuth();
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e){
        e.preventDefault();
        setLoading(true);

        if(password.length < 6){
          alert("Password deve ter no mínimo 6 cacacteres");
          setLoading(false);
          return;
        }

        try{
            await signIn(email, password);
            navigate("/");
          }catch (error){
            alert("Erro no Login");
          }

          setLoading(false);
    }

  return (
    
        <>
      <div className='container'>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="">Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

          <label htmlFor="">Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

          <button disabled={loading} className='button-block' type='submit'>Login</button>
        </form>

        <div className="center">
            <div>
                <p>
                    Esqueceu a senha? <Link to="/login">Resetar senha</Link>
                </p>
                <p>
                    Criar nova conta? <Link to="/signup">Cadastrar</Link>
                </p>
            </div>
        </div>
      </div>
    </>
    
  )
}

export default Login