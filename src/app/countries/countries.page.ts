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

  constructor(
    private mds: MyDataService,
    private apiService: CountriesApiServiceService
  ) {}

  ngOnInit() {
    this.getSearchTermFromStorage();
  }

  async getSearchTermFromStorage() {
    this.searchTerm = await this.mds.get('searchTerm');
    if (this.searchTerm) {
      this.getCountries(); // Fetch countries only if searchTerm exists
    } else {
      console.error('No search term found in storage.');
    }
  }

  async getCountries() {
    this.apiService.getCountriesByName(this.searchTerm).subscribe({
      next: (response) => {
        this.countries = response;
        console.log('Countries: ', this.countries);
      },
      error: (error) => {
        console.error('Error retrieving countries:', error);
      },
    });
  }
}
