import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Col } from 'react-bootstrap';

const apiKey = "f61d084f19b9d0341c46ac9625c16561";

class WeatherApp extends Component {
  state = {
    city: "",
    weatherData: null,
    error: null
  }

  componentDidMount() {
    const defaultCity = "Sibari";
    

    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${defaultCity}&appid=${apiKey}&units=metric`)
      .then(response => {
        if (!response.ok) {
          throw Error("City not found");
        }
        return response.json();
      })
      .then(data => {
        this.setState({ weatherData: data, error: null });
      })
      .catch(error => {
        this.setState({ error: error.message, weatherData: null });
      });
  }

  handleInputChange = (e) => {
    this.setState({ city: e.target.value });
  }

  handleFormSubmit = (e) => {
    e.preventDefault();

    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&appid=${apiKey}&units=metric`)
      .then(response => {
        if (!response.ok) {
          throw Error("City not found");
        }
        return response.json();
      })
      .then(data => {
        this.setState({ weatherData: data, error: null });
      })
      .catch(error => {
        this.setState({ error: error.message, weatherData: null });
      });
  }

  getWeatherIcon = (iconId) => {
    const baseUrl = "https://openweathermap.org/img/w/";
    return `${baseUrl}${iconId}.png`;
  }

  render() {
    const { city, weatherData, error } = this.state;

    return (
      <div className="container text-center mt-5 sfondo-meteo">
        <h3 className='lead fw-bold esperienze'>Visiona il meteo della giornata prima di prenotare</h3>
        <div className="row">
          <Col md={3} className="d-flex align-items-center justify-content-center">
          </Col>
          <Col md={6} className="d-flex flex-column align-items-center">
            <form onSubmit={this.handleFormSubmit}>
              <div className="form-group">
                <label className='mt-5 fw-bold esperienze' htmlFor="cityInput">Città:</label>
                <input type="text" className="form-control mt-3 input-ricerca" id="cityInput" value={city} onChange={this.handleInputChange} />
              </div>
              <button type="submit" className="btn btn-success mt-5 button-ricerca">Cerca</button>
            </form>

            {error && <p>{error}</p>}

            {weatherData && (
              <div className='text-center'>
                <h2 className='mt-3 fw-bold' style={{ color: '#058789' }}>{weatherData.city.name}</h2>
                <Carousel interval={3000} pauseOnHover={true} indicators={false}>
                  {weatherData.list.filter((forecast) => {
                    const forecastDate = new Date(forecast.dt_txt);
                    const currentDate = new Date();
                    return (
                      forecastDate.getDate() === currentDate.getDate() ||
                      forecastDate.getDate() === currentDate.getDate() + 1
                    );
                  }).map((forecast, index) => (
                    <Carousel.Item key={index} className='my-3'>
                      <div className='card-deck'>
                        <div className="card mt-2 shadow">
                          <div className="card-body weather-section">
                            <h5 className="card-title mt-2 weather-section">{new Date(forecast.dt_txt).toLocaleString('it-IT', {day: 'numeric', month: 'long', year: 'numeric'})}</h5>
                            <h5 className="card-title mt-2 weather-section">{new Date(forecast.dt_txt).toLocaleTimeString("it-IT", { hour: "2-digit", minute: "2-digit" })}</h5>
                            <img
                              src={this.getWeatherIcon(forecast.weather[0].icon)}
                              alt={forecast.weather[0].description}
                            />
                            <p className="card-text weather-section">{forecast.weather[0].description}</p>
                            <p className="card-text weather-section">Temperatura: {forecast.main.temp}°C</p>
                            <p className="card-text weather-section">Umidità: {forecast.main.humidity}%</p>
                          </div>
                        </div>
                      </div>
                    </Carousel.Item>
                  ))}
                </Carousel>
              </div>
            )}
          </Col>
          <Col md={3} className="d-flex align-items-center justify-content-center">
          </Col>
        </div>
      </div>
    );
  }
}

export default WeatherApp;


