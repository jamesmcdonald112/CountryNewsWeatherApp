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
  IonCardContent,
  IonButton,
} from '@ionic/angular/standalone';
import { MyDataService } from '../services/my-data.service';
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
  errorMessage: string = 'No countries found. Try searching again.';

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
    this.searchTerm = (await this.mds.getCountry()) || '';
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
      if (countries && Array.isArray(countries)) {
        this.countries = countries;
        console.log('Countries:', this.countries);
      } else {
        this.countries = [];
      }
    } catch (error) {
      console.error('Error retrieving countries:', error);
      this.countries = [];
    } finally {
    }
  }

  public setCountryData(country: any) {
    this.storeCountryCode(country);
    this.storeCaptialCity(country);
    this.storeCountryName(country);
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

  private storeCountryName(country: any) {
    this.mds.setCountry(country.name.common);
    console.log('Country name:', country.name.common);
  }

  public navigateToNews(country: any) {
    this.domUtils.blurActiveButton();
    this.setCountryData(country);
    this.router.navigate(['/news']);
  }

  public async navigateToWeather(country: any) {
    this.domUtils.blurActiveButton();
    this.setCountryData(country);
    this.router.navigate(['/weather']);
  }
}
