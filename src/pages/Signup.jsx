import {React, useState} from 'react'
import { useAuth } from '../context/authContext'
import { Link } from 'react-router-dom';

const Signup = () => {
  const {signUp} = useAuth();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false)

async function handleSubmit(e){
    e.preventDefault();

    setLoading(true)

    if(password.length < 6){
      alert("Password deve ter no mínimo 6 cacacteres");
      setLoading(false)
      return;
    }

    if(password !== confirmPassword){
      alert("Senhas não conferrem");
      setLoading(false)
      return;
    }

    try{
      await signUp(email, password);
    }catch (error){
      alert("Erro");
    }

    setLoading(false)
  }

  return (
    <>
      <div className='container'>
        <h2>Signup</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="">Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

          <label htmlFor="">Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

          <label htmlFor="">Password confirmation</label>
          <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />

          <button disabled={loading} className='button-block' type='submit'>Signup</button>
        </form>

        <div className="center">
            <div>
                <p>
                    Já possui uma conta? <Link to="/login">Resetar senha</Link>
                </p>
                
            </div>
        </div>
      </div>
    </>
  )
}

export default Signup