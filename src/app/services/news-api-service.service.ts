import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MyDataService } from './my-data.service';
import { MyHttpService } from './my-http.service';

@Injectable({
  providedIn: 'root',
})
export class NewsApiServiceService {
  private startingUrl: string =
    'https://newsdata.io/api/1/latest?apikey=pub_61690c06a1ca2bf9f6733a01f08f5508d8cf7';

  constructor(private http: MyHttpService) {
    
  }

  async getNewsByCountry(countryCca2Code: string): Promise<any> {
    const options = {
      url: `${this.startingUrl}&country=${countryCca2Code}`,
    };
    const response = await this.http.get(options);
    return response.data; // Access the response data
  }

}
