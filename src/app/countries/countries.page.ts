import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton } from '@ionic/angular/standalone';
import { MyDataService } from '../services/my-data.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.page.html',
  styleUrls: ['./countries.page.scss'],
  standalone: true,
  imports: [IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class CountriesPage implements OnInit {
  countryName: string = '';

  constructor(private mds: MyDataService) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.getCountryFromStorage();
  }

  async getCountryFromStorage() {
    this.countryName = await this.mds.get('country');
  }

}
