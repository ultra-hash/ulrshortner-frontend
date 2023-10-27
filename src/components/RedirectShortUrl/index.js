import { api } from '../../config'

export default function RedirectShortUrl(props) {
    const { match } = props
    const { shortUrl } = match.params
    window.location.replace(`${api.routes.urls.RedirectUrl}/${shortUrl}`);
}