import React, { Component } from 'react';
import Main from './components/Main';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = ({
      mainTemp: "",
      minTemp: "",
      maxTemp: "",
      containerClass: "container",
      headerClass: "header",
      h1Class: "h1",
      allTempClass: "noneClass",
    })
    this.checkweather = this.checkweather.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(e) {
    e.preventDefault();
    if (isNaN(e.target.inputBox.value)) {
      this.checkweather('q=', e.target.inputBox.value);
    }
    else {
      this.checkweather("zip=", e.target.inputBox.value);
    }
  }

  checkweather(nameorzip, value) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?${nameorzip + value}&units=imperial&APPID=1a41a50ea9afa8171ef556a9e33f2fe6`)
      .then((response) => {
        response.json()
          .then((json) => {
            this.setState({
              mainTemp: json.main.temp,
              minTemp: json.main.temp_min,
              maxTemp: json.main.temp_max,
              containerClass: "newcontainer",
              headerClass: "newheader",
              h1Class: "newh1",
              allTempClass: "displayBlockClass",
            })
            this.weatherpic(json);
          })
      })
  }

  weatherpic(json) {
    let backimg = document.querySelector('.backimg');
    backimg.style.display = 'block';
    backimg.style.backgroundImage = "url(/images/" + json.weather[0].main + ".jpg)";
  }

  render() {
    return (
      <div className="app">
        <Main
          submitForm={this.submitForm}
          mainTemp={this.state.mainTemp}
          minTemp={this.state.minTemp}
          maxTemp={this.state.maxTemp}
          containerClass={this.state.containerClass}
          headerClass={this.state.headerClass}
          h1Class={this.state.h1Class}
          allTempClass={this.state.allTempClass}
        />
      </div>
    );
  }
}

export default App;
