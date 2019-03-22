import React, { Component } from 'react'

export default class Form extends Component {
  render() {
      const {getWeather}=this.props;
    return (
     <form onSubmit={getWeather}>
         <input type="text" name="city" placeholder="City" className="text-capitalize" />
         <input type="text" name="country" placeholder="country" className="text-capitalize" />
         <button type="submit">Click</button>
     </form>
    )
  }
}
