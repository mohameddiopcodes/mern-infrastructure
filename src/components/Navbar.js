import React from 'react'
import { Link } from 'react-router-dom'
import { Logout } from '../utilities/users-service'

export default function Navbar({ user, setUser }) {
    function handleLogOut() {
        Logout()
        setUser(null)
    }
    return (
        <div>
            <a href="/orders">Order History</a>
            <a href="/orders/new">New Order</a>
            <span>Welcome, {user.name}</span>
            <Link to="" onClick={handleLogOut}>Logout</Link>
        </div>
    )
}