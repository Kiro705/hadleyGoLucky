import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

const Main = (props) => {
  const {children} = props

  return (
    <div>
      <nav>
        <div>
          <h1>Hadley Hauser</h1>
        </div>
      </nav>
      <hr />
      {children}
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {}
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState)(Main))

