import { useState, useEffect } from 'react'
import { api } from '../../config'
import Cookies from 'js-cookie'

export default function UrlsTable(props) {
    const [urls, setUrls] = useState([])

    const getUrlsFromApi = async () => {
        const { BASE_URL } = api
        const jwtToken = Cookies.get('jwt_token')
        const url = BASE_URL + `/url/list?stats=true`

        const options = {
            method: 'GET',
            headers: {
                authorization: `bearer ${jwtToken}`,
                'content-type': 'application/json'
            },
        }

        const response = await fetch(url, options)
        const data = await response.json()

        console.log(data)
        try {
            setUrls(data)
        } catch (err) {
            console.log('err : ', err)
        }
    }

    useEffect(() => { getUrlsFromApi() }, [])

    const header = ["s.no", "shot_url", "long_url", "no of hits", "created_at"]


    return (
        <>
            <h1>Urls Tables</h1>
            <table>
                <thead>
                    <tr>
                        {header.map(head => <th key={head}>{head}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {urls.map(row => <tr key={row.id}>
                        <td>{row.id}</td>
                        <td>{row.shortUrl}</td>
                        <td>{row.longUrl}</td>
                        <td>{row.visited}</td>
                        <td>{row.created}</td>
                    </tr>)}
                </tbody>
            </table>
        </>
    )
}