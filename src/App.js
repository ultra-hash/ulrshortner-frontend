import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Profile from './components/Profile'
import Login from './components/Login'
import Register from './components/Register'
import RedirectShortUrl from './components/RedirectShortUrl'



function App() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/profile' component={Profile} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/register' component={Register} />
      <Route exact path='/:shortUrl' component={RedirectShortUrl} />
    </Switch>
  )
}

export default App;
