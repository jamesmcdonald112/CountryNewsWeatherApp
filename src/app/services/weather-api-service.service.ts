import { Injectable } from '@angular/core';
import { MyHttpService } from './my-http.service';
import { MyDataService } from './my-data.service';

@Injectable({
  providedIn: 'root',
})
export class WeatherApiService {
  private startingUrl: string =
    'http://api.weatherstack.com/current?access_key=e11f97aa6311aa946458a82e84e4be53&query=';

  constructor(private http: MyHttpService, private mds: MyDataService) {}

  async getWeatherByCity(city: string): Promise<any> {
    const units = (await this.mds.getUnits()) || 'm';

    const options = {
      url: `${this.startingUrl}${city}&units=${units}`,
    };
    const response = await this.http.get(options);
    return response.data;
  }
}
