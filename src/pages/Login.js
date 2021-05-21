import { useState, useEffect } from 'react'
import LoginForm from "../components/LoginForm"

function Login() {
    const [loggedIn, setLoggedIn] = useState()
    const [username, setUsername] = useState()

    useEffect(() => {
        const localLoggedIn = localStorage.getItem('loggedIn')
        const boolLoggedIn = JSON.parse(localLoggedIn)

        setLoggedIn(boolLoggedIn)

        const localUsername = localStorage.getItem('username')
        setUsername(localUsername)

    }, [])
    
    return (
        <>
            {loggedIn ?
                <h2 className="font-bold tracking-wider text-center text-3xl mb-8 text-gray-900">Du är inloggad som {username}</h2>
                :
                <>

                    <h2 className="font-bold tracking-wider text-center text-3xl mb-8 text-gray-900">Logga in</h2>
                    <LoginForm />
                </>
            }

        </>
    )
}

export default Login
