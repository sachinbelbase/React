import React,{useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const { user } = useContext(UserContext)

    if (!user) return <div style={{ textAlign: 'center', backgroundColor: 'gray' }}>Please Login.</div>

    return <div style={{ textAlign: 'center', backgroundColor: 'gray' }}>Welcome {user.username}</div>
}
export default Profile