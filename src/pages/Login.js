function Login() {
    return (
        <>
            <h1>Logga in</h1>
            <form>
                <label for='username'>Användarnamn</label>
                <input type='text' name='username'></input>
                <label for='password'>Lösenord</label>
                <input type='password' name='password'></input>
                <button>Logga in</button>
            </form>
        </>
    )
}

export default Login
