import React, { useContext } from 'react'
import { useNavigate } from 'react-router';
import Authenticate from '../customHook/Authenticate';
import { MyContext } from '../myContext';

const Profile = (props) => {
  const {state,setState} = useContext(MyContext)
  const navigate=useNavigate()
  Authenticate()
  return (
    <>
    <div className="col-12 d-flex align-items-center justify-content-center">
      <div className="mt-4">
        <div className='col-4' style={{minWidth:'300px'}}>
         <p className='fs-5'><i className="bi bi-person-fill mx-2">Name:</i> <span className='text-primary'>{state.session.name}</span></p>
         <p className='fs-5'><i className="bi bi-envelope-at-fill mx-2">Email:</i> <span className='text-primary'>{state.session.email}</span></p>
         <p className='fs-5'><i className="bi bi-incognito mx-2">Password:</i> <span className='text-secondary'>{state.session.password}</span></p>
        <button className='btn btn-danger col-12' onClick={()=>{navigate('/');setState({...state,session:{}})}}>log out</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Profile