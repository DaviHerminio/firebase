import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';

const UpdateProfile = () => {
  const {UpdateEmailAddress, currentUSer} = useAuth();
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState(currentUSer?.email);

  async function handleSubmit(e){
    e.preventDefault();

    setLoading(true)
    if(email === currentUSer?.email){
      setLoading(false)
      return navigate("/")
    }

    try{
      await UpdateEmailAddress(email);
      navigate("/");
    }catch (error){
      console.log(error)
      alert("Erro ao atualuzar o usuário")
    }

    setLoading(false);
  }

  return (
    <div className='container'>
        <div className="header">
            <h1>Atualizar Perfil</h1>
        </div>

        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

          <button disabled={loading} className='button-block'>Atualizar</button>
        </form>
    </div>
  )
}

export default UpdateProfile