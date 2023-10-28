import { useState } from 'react'
import { api, HOST_URL } from '../../config'
import {
    HomeBodyContainer,
    HomeHeading,
    HomeFormContainer,
    HomeFormInput,
    HomeFormSubmitButton,
    HomeErrorContainer,
    HomeErrorMessage
} from './styledComponents'


export default function Home() {

    const [longUrl, setLongUrl] = useState('')
    const [shortUrl, setShortUrl] = useState('')
    const [errorMsg, setErrorMsg] = useState('')

    const callCreateShortUrlApi = async () => {
        const url = api.routes.urls.CreateUrl
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



    return (
        <HomeBodyContainer>
            <HomeHeading>Url Shortner</HomeHeading>
            <HomeFormContainer>
                <HomeFormInput type="text" placeholder="Example : https://ultrahash.in/projects/urlshortner" value={longUrl} onChange={e => setLongUrl(e.target.value)} />
                <HomeFormSubmitButton type="button" onClick={callCreateShortUrlApi}>Shrink URL</HomeFormSubmitButton>
            </HomeFormContainer>
            <HomeErrorContainer>
                {<p><b>shortened url :</b> {shortUrl ? `${HOST_URL}/${shortUrl}` : ''}</p>}
                {errorMsg !== '' && <HomeErrorMessage><b>Error : </b>{errorMsg}</HomeErrorMessage>}
            </HomeErrorContainer>
        </HomeBodyContainer>
    )
}