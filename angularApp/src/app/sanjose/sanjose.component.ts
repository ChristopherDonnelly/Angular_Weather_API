import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

import { CityDataService } from '../citydata.service';

@Component({
  selector: 'app-sanjose',
  templateUrl: './sanjose.component.html',
  styleUrls: ['./sanjose.component.css']
})

export class SanjoseComponent implements OnInit {

  fullImagePath: string;

  constructor(
    private _httpService: HttpService,
    public cityDataService: CityDataService
  ) { }

  ngOnInit() {
    this.cityDataService.resetCityData()
    this.fullImagePath="../assets/images/sanjose.jpg";
    this.cityDataService.city.location = 'San Jose';
    console.log(this.cityDataService.city.location)
    this.getCurrentWeather();
  }

  getCurrentWeather(){
    const URL = this.cityDataService.city.URL;
    const location = this.cityDataService.city.location;
    const API_Key = this.cityDataService.city.API_Key;
    const units = this.cityDataService.city.units;

    let currentWeather = this._httpService.getWeather(URL+location+API_Key+units);
    currentWeather.subscribe(data => {
      console.log(data)

      this.cityDataService.city.humidity = data['main'].humidity;
      this.cityDataService.city.temp = Math.round(data['main'].temp);
      this.cityDataService.city.temp_high = Math.round(data['main'].temp_max);
      this.cityDataService.city.temp_low = Math.round(data['main'].temp_min);
      this.cityDataService.city.status = data['weather'][0].description;
      this.cityDataService.city.icon = data['weather'][0].icon;
    });
  }

}
