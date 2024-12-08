import { Injectable } from '@angular/core';
import { MyHttpService } from './my-http.service';

@Injectable({
  providedIn: 'root'
})
export class CountriesApiServiceService {
  private startingUrl: string = "https://restcountries.com/v3.1";

  constructor(private http: MyHttpService) { }

  async getCountriesByName(name: string): Promise<any> {
    const options = {
      url: `${this.startingUrl}/name/${name}`,
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const response = await this.http.get(options);
    return response.data;
  }
}
