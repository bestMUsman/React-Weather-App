import React, { Component } from 'react';

class Main extends Component {
  render() {
    return (
      <div className="main">
        <div className="backimg"></div>
        <div className={this.props.headerClass} id='header'>
          <h1 id="h1" className={this.props.h1Class}>
            Weather App
          </h1>
          <div className={this.props.containerClass} id='container'>
            <form onSubmit={this.props.submitForm}>
              <input type="text" name="inputBox" id="inputbox" className="inputbox" placeholder='CITY / ZIP' />
              <button id="submit" className="submit"></button>
            </form>
          </div>
        </div>
        <div className={this.props.allTempClass}>
          <div className="maintemp">{this.props.mainTemp} </div>
          <div className="mmtemp">
            <div className="min">
              <div className="minword">Min</div>
              <div className="mintemp">{this.props.minTemp}
              </div>
            </div>
            <div className="max">
              <div className="maxword">Max</div>
              <div className="maxtemp">{this.props.maxTemp} </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Main;