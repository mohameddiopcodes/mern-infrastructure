import React from 'react' 

import SignUpForm from '../../components/SignUpForm'
import LogInForm from '../../components/LogInForm'

export default function AuthPage({ setUser }) {
    return (
        <main>
            <h1>AuthPage</h1>
            <SignUpForm setUser={setUser} />
            <LogInForm setUser={setUser} />
        </main>
    )
}