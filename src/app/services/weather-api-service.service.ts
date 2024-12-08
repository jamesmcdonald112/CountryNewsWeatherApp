import { Injectable } from '@angular/core';
import { MyHttpService } from './my-http.service';
import { MyDataService } from './my-data.service';

@Injectable({
  providedIn: 'root',
})
export class WeatherApiService {
  private startingUrl: string =
    'http://api.weatherstack.com/current?access_key=';

  apiKey: string = '75629052b42aeb8eb633aa5f78da266b';

  constructor(private http: MyHttpService, private mds: MyDataService) {}

  async getWeatherByCity(city: string): Promise<any> {
    const units = (await this.mds.getUnits()) || 'm';

    const options = {
      url: `${this.startingUrl}${this.apiKey}&query=${city}&units=${units}`,
    };
    const response = await this.http.get(options);
    return response.data;
  }
}
