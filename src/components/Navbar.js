import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom'
import PhoneticBanner from './PhoneticBanner'
import AuthenticBanner from './AuthenticBanner'
import TailoredBanner from './TailoredBanner'

class Navbar extends Component {

  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand-sm">
            <ul className="navbar-nav">
              <li className="nav-item ">
                <Link to="/PhoneticBanner" className="tab">Phonetic</Link>
              </li>
              <li className="nav-item">
                <Link to="/AuthenticBanner" className="tab">Authentic</Link>
              </li>
              <li className="nav-item">
                <Link to="TailoredBanner" className="tab">Tailored</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path='/PhoneticBanner'>
              <PhoneticBanner />
            </Route>
            <Route path='/AuthenticBanner'>
              <AuthenticBanner />
            </Route>
            <Route path='/TailoredBanner'>
              <TailoredBanner />
            </Route>
            <Route path='/'>
              <Redirect to='/PhoneticBanner' />
            </Route>
          </Switch>

        </div>
      </Router>

    )
  }
}

export default Navbar;
