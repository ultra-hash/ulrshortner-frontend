import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Profile from './components/Profile'
import Login from './components/Login'
import Register from './components/Register'



function App() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/profile' component={Profile} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/register' component={Register} />
    </Switch>
  )
}

export default App;
