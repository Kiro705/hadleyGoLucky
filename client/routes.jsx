import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Router} from 'react-router'
import {Route, Switch, Redirect} from 'react-router-dom'
import history from './history'
import {Main, Home} from './components'

/**
 * COMPONENT
 */
class Routes extends Component {

  render () {
    return (
      <Router history={history}>
        <Main>
            { 
            //We set the state after loading
            !this.state ? 
                <h1>LOADING...</h1> :
                <Switch>
                    <Route path='/home' component={Home} />
                    <Redirect to='/home' />
                </Switch>
            }
        </Main>
      </Router>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isDoneLoading: false
  }
}

export default connect(mapState)(Routes)
