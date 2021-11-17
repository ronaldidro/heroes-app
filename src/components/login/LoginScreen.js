import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginScreen = ({ history }) => {

  const { dispatch } = useContext(AuthContext)
  
  const handleLogin = () => {

    const action = {
      type: types.login,
      payload: { name: 'DIDRO' }
    }

    dispatch(action);

    // history.push('/'); //redirect to page
    history.replace('/'); //drop last history
  }

  return (
    <div className="container mt-5">
      <h1>Login Screen</h1>
      <hr />

      <button
        className="btn btn-primary"
        onClick={ handleLogin }
      >
        Login
      </button>
    </div>
  )
}
