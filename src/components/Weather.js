import React, { Component } from 'react'

export default class Weather extends Component {
  render() {
     const {temperature,city,country,humidity,error,description}=this.props;
    return (
      <div>
          {city && country && 
          <p className="text-capitalize weather__key"  >
           Location : <span className="weather__value" >{city},{country}</span>
          </p>
          }
        
      {
        temperature && 
        <p className="text-capitalize weather__key"  >
        Temperature : <span  className="weather__value" >{temperature}</span>
        </p>
      } 
      {humidity &&
         <p  className="text-capitalize weather__key" >
         Humidity : <span  className="weather__value" >{humidity}</span> 
         </p>  
         }
       {description  && 
       <p className="text-capitalize weather__key"  >
       desciptipn : 
       <span  className="weather__value"  > {description}</span>
       </p>
        }  
      {error  && 
      <p className="text-capitalize weather__error"  >
      error : <span className="weather__value" > {error}</span>
      </p> } 
      </div>
    )
  }
}
