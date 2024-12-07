import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountriesApiServiceService {
  startingUrl: string = "https://restcountries.com/v3.1";

  constructor(private http: HttpClient) { }

  getCountriesByName(name: string) {
    return this.http.get<any[]>(`${this.startingUrl}/name/${name}`)
  }
}
