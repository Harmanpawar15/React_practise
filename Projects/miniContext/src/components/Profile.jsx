import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const{user}=useContext(UserContext)
  
    if(!user) return <div>Enter Details</div>
    return (
    <div>{user.username}</div>
  )
}

export default Profile