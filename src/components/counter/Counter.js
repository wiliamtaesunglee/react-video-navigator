'use strict'

import React from 'react'
import { connect } from 'react-redux'
const Counter = ({counter, increment}) => (
  <button onClick={increment}>{counter}</button>
)

const mapStateToProps = state => ({
    counter: state.counter
})

const mapDispatchProps = dispatch => ({
  increment: () => dispatch({type: 'INC'})
})

export default connect(mapStateToProps, mapDispatchProps)(Counter)
