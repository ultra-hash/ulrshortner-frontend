import { useState } from "react"
import { api } from "../../config"

export default function Register() {
    const [first_name, setFirst_name] = useState('')
    const [last_name, setLast_name] = useState('')
    const [username, setUsername] = useState('')
    const [email_id, setEmail_id] = useState('')
    const [phone_number, setPhone_number] = useState('')
    const [password, setPassword] = useState('')


    const callCreateUserApi = async () => {
        const userData = {
            firstName: first_name,
            lastName: last_name,
            username,
            emailId: email_id,
            phoneNumber: phone_number,
            password
        }
        const { BaseUrl, Port } = api
        const url = BaseUrl + ':' + Port + '/user/'
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        }


        const response = await fetch(url, options)
        const data = await response.json()
        console.log(data)
        setFirst_name('')
        setLast_name('')
        setEmail_id('')
        setPhone_number('')
        setPassword('')
        setUsername('')
    }

    return (<>
        <h1>Register</h1>
        <form>
            <div>
                <input type="text" placeholder="first_name" value={first_name} onChange={e => setFirst_name(e.target.value)} />
            </div>
            <div>
                <input type="text" placeholder="last_name" value={last_name} onChange={e => setLast_name(e.target.value)} />
            </div>
            <div>
                <input type="text" placeholder="username" value={username} onChange={e => setUsername(e.target.value)} />
            </div>
            <div>
                <input type="email" placeholder="email_id" value={email_id} onChange={e => setEmail_id(e.target.value)} />
            </div>
            <div>
                <input type="text" placeholder="phone_number" value={phone_number} onChange={e => setPhone_number(e.target.value)} />
            </div>
            <div>
                <input type="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value)} />
            </div>
            <div>
                <button type="button" onClick={callCreateUserApi}>Register</button>
            </div>
        </form>
    </>
    )
}