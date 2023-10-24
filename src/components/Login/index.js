import { useState } from 'react'
import { api } from '../../config'
import Cookies from 'js-cookie'


export default function Login(props) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errorMsg, setErrorMsg] = useState('')
    const [showError, toggleShowError] = useState(false)


    const loginApi = async () => {
        const { BaseUrl, Port } = api
        const url = BaseUrl + ':' + Port + '/user/login'
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ username, password })
        }

        const response = await fetch(url, options)
        const data = await response.json()

        if (data.jwtToken) {
            Cookies.set('jwt_token', data.jwtToken, { expires: 1 })
            const { history } = props
            history.push('/')
        } else {
            setErrorMsg(data.error)
            toggleShowError(prev => !prev)
        }
    }


    return (<>
        <h1>Login</h1>
        <form>
            <div>
                <input type='text' placeholder='username' value={username} onChange={e => setUsername(e.target.value)} />
            </div>
            <div>
                <input type='password' placeholder='password' value={password} onChange={e => setPassword(e.target.value)} />
            </div>
            <div>
                <button type="button" onClick={loginApi}>Login</button>
            </div>
        </form>
        {showError && <p>{errorMsg}</p>}
    </>
    )
}