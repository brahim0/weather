import React, { Component } from 'react'

export default class Titles extends Component {
  render() {
    return (
      <div>
        <h1 className="text-capitalize title-container__title">weather finder</h1>
        <p className="text-capitalize  title-container__subtitle">Find out temperature, conditions and more</p>
      </div>
    )
  }
}
