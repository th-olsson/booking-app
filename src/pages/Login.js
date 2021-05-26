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
                <h2 className="text-center text-2xl text-gray-800 my-5">Du är inloggad som {username}</h2>
                :
                <>

                    <h2 className="text-center text-2xl text-gray-800 my-5">Logga in</h2>
                    <LoginForm />
                </>
            }

        </>
    )
}

export default Login
