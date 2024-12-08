import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonButton,
} from '@ionic/angular/standalone';
import { WeatherApiService } from '../services/weather-api-service.service';
import { MyDataService } from '../services/my-data.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
  standalone: true,
  imports: [
    IonButton,
    IonCardContent,
    IonCardSubtitle,
    IonCardTitle,
    IonCardHeader,
    IonCard,
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
  ],
})
export class WeatherPage implements OnInit {
  weatherData: any = [];
  units!: string

  constructor(
    private weatherApiService: WeatherApiService,
    private mds: MyDataService
  ) {}

  ngOnInit() {
    this.handleWeatherData();
  }

  private async handleWeatherData() {
    const capital = await this.mds.getCapitalCity();
    if (capital) {
      this.getWeatherData(capital);
    } else {
      console.error('No captial city found in storage');
    }
  }

  private async getWeatherData(location: string) {
    try {
      const data = await this.weatherApiService.getWeatherByCity(location);
      if (data && data.current && data.location) {
        this.weatherData = data;
        console.log('Weather data:', this.weatherData);
      } else {
        console.log('No weather data available');
      }
    } catch (error) {
      console.error('Error getting Weather:', error);
    }
  }
}
