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
import { MyDataService } from '../services/my-data.service';
import { MyHttpService } from '../services/my-http.service';
import { HttpOptions } from '@capacitor/core';
import { CountriesApiServiceService } from '../services/countries-api-service.service';
import { Router } from '@angular/router';
import { DomUtilsService } from '../services/dom-utils.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.page.html',
  styleUrls: ['./countries.page.scss'],
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
export class CountriesPage implements OnInit {
  countries: any[] = [];
  searchTerm: string = '';
  countryCode: string = '';

  constructor(
    private mds: MyDataService,
    private apiService: CountriesApiServiceService,
    private router: Router,
    private domUtils: DomUtilsService
  ) {}

  ngOnInit() {
    this.getSearchTermFromStorage();
  }

  async getSearchTermFromStorage() {
    this.searchTerm = await this.mds.get('searchTerm');
    if (this.searchTerm) {
      this.getCountries();
    } else {
      console.error('No search term found in storage.');
    }
  }

  async getCountries() {
    try {
      const countries = await this.apiService.getCountriesByName(
        this.searchTerm
      );
      this.countries = countries;
      console.log('Countries:', this.countries);
    } catch (error) {
      console.error('Error retrieving countries:', error);
    }
  }

  public setCountryData(country: any) {
    this.storeCountryCode(country);
    this.storeCaptialCity(country);
  }

  private storeCountryCode(country: any) {
    this.mds.setCountryCode(country.cca2);
    console.log('Country code', this.countryCode);
  }

  private storeCaptialCity(country: any) {
    const capitalCity = country.capital[0];
    this.mds.setCapitalCity(capitalCity);
    console.log('Captial: ', capitalCity);
  }

  public navigateToNews() {
    this.domUtils.blurActiveButton();
    this.router.navigate(['/news']);
  }

  public navigateToWeather() {
    this.domUtils.blurActiveButton();
    this.router.navigate(['/weather']);
  }
}
