import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  // http://samples.openweathermap.org/data/2.5/forecast?id=524901&appid=b1b15e88fa797225412429c1c50c122a1

  constructor(private _http: HttpClient){
    // this.getPokemon('charizard');
    // this.getPokemonAbility();
  }

  getWeather(URL){
    return this._http.get(URL);
  }

}
