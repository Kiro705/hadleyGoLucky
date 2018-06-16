import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'


const Home = (props) => {
    return (
        <div>
            <p>Hello from Hadley</p>
        </div>
    )
}

const mapState = (state) => {
  return {
  }
}

export default withRouter(connect(mapState)(Home))
