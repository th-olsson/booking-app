function Login() {
    return (
        <div className='flex content-center place-content-center'>
            <div className="flex flex-col rounded-lg shadow-lg border my-20">
                <form className="flex flex-col space-evenly px-8 py-6">
                    <h1 className="font-bold tracking-wider text-3xl mb-8 w-full text-gray-900">Logga in</h1>
                    <label className='text-s font-semibold px-1' htmlFor='username'>Användarnamn</label>
                    <input className=' border-2 border-gray-200 focus:outline-none py-1 px-4 rounded-lg' type='text' name='username'></input>
                    <label className='text-s font-semibold px-1' htmlFor='password'>Lösenord</label>
                    <input className='border-2 border-gray-200 focus:outline-none py-1 px-4 rounded-lg' type='password' name='password'></input>
                    <button disabled className='border-2 border-gray-100 focus:outline-none bg-purple-600 text-white font-bold tracking-wider block w-full py-2 mt-2 rounded-lg focus:border-gray-700 hover:bg-purple-700'>Logga in</button>
                </form>
            </div>
        </div>
    )
}

export default Login
