import { useState } from 'react'
import { api } from '../../config'

export default function Home() {

    const [longUrl, setLongUrl] = useState('')
    const [shortUrl, setShortUrl] = useState('')
    const [errorMsg, setErrorMsg] = useState('')

    const callCreateShortUrlApi = async () => {
        const { BaseUrl, Port } = api
        const url = BaseUrl + ':' + Port + '/url/'
        const userId = 1
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ userId, longUrl })

        }
        if (longUrl !== '') {
            const response = await fetch(url, options)
            const data = await response.json()
            setLongUrl('')
            setShortUrl(data.short_url)
            setErrorMsg('')
        } else {
            setErrorMsg('Please enter a url')
            setShortUrl('')
        }
    }



    return (<>

        <h1>Home</h1>

        <form>
            <div>
                <input type="text" placeholder="long Url" value={longUrl} onChange={e => setLongUrl(e.target.value)} />
            </div>
            <div>
                <button type="button" onClick={callCreateShortUrlApi}>Shrink URL</button>
            </div>
            {errorMsg !== '' && <p>{errorMsg}</p>}
            {shortUrl !== '' && <p><b>shorterned url:</b> {shortUrl}</p>}
        </form>
    </>
    )
}