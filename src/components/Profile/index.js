import { useState, useEffect } from 'react'
import { api } from '../../config'

export default function Profile() {
    const [first_name, setFirst_name] = useState('')
    const [last_name, setLast_name] = useState('')
    const [email, setEmail] = useState('')
    const [phone_number, setPhone_number] = useState('')
    const [username, setUsername] = useState('')

    const callGetUserDetailsApi = async () => {
        const url = api.routes.users.GetUserDetails + '?username=johncena'

        const response = await fetch(url)
        const data = await response.json()

        setFirst_name(data.first_name)
        setLast_name(data.last_name)
        setEmail(data.email_id)
        setPhone_number(data.phone_number)
        setUsername(data.username)

    }

    useEffect(() => { callGetUserDetailsApi() }, [])

    return (<>
        <h1>Profile</h1>
        <small>TODO:// default username: johncena</small>
        <div style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
            <p>Name: <b> {first_name} {last_name}</b></p>
            <p>Email: <b>{email}</b></p>
            <p>username: <b>{username}</b></p>
            <p>phone_number: <b>{phone_number}</b></p>
        </div>
    </>
    )
}