//TODO:REDUX STATE'INE ERİŞİYORSA CONTAINERDIR
import React, { Component } from "react";
import { connect } from "react-redux";
import Chart from "../components/chart";
import GoogleMap from "../components/google-map";
import _ from "lodash";
class WeatherList extends Component {
  renderWeather(cityData) {
    const { name } = cityData.city;
    const temps = _.map(
      cityData.list.map(weather => weather.main.temp),
      temp => temp - 273
    );
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const { lon, lat } = cityData.city.coord;

    return (
      <tr key={name}>
        <td>
          <GoogleMap lat={lat} lon={lon} />
        </td>
        <td>
          <Chart units="C" data={temps} color="orange" />
        </td>
        <td>
          <Chart units="hPa" data={pressures} color="green" />
        </td>
        <td>
          <Chart units="%" data={humidities} color="black" />
        </td>
      </tr>
    );
  }
  render() {
    return (
      <table style={{ marginTop: 5 }} className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (C)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>{this.props.weather.map(this.renderWeather)}</tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return {
    weather
  };
}
export default connect(mapStateToProps)(WeatherList);
