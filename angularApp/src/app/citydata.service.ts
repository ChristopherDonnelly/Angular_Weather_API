import { Injectable } from '@angular/core';

@Injectable()
export class CityDataService {

  city = {
    URL: 'http://api.openweathermap.org/data/2.5/weather?q=',
    API_Key: '&APPID=2309e2d63449466bb3d8f3bbbcbec013',
    icon_URL: 'http://openweathermap.org/img/w/',
    units: '&units=imperial',
    icon: '',
    location: '',
    humidity: '',
    temp: 0,
    temp_high: 0,
    temp_low: 0,
    status: ''
  }

  resetCityData(){
    this.city.icon = '';
    this.city.location = '';
    this.city.humidity = '';
    this.city.temp = 0;
    this.city.temp_high = 0;
    this.city.temp_low = 0;
    this.city.status = '';
  }

}
