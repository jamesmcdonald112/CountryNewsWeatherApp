import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonButton,
  IonIcon,
  IonItem,
  IonLabel,
  IonInput,
  IonText,
  IonGrid,
  IonRow,
  IonCol,
} from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MyDataService } from '../services/my-data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonCol,
    IonRow,
    IonGrid,
    IonText,
    IonInput,
    IonLabel,
    IonItem,
    IonIcon,
    IonButton,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    RouterLink,
    FormsModule,
  ],
})
export class HomePage {
  countryName: string = '';

  constructor(private mds: MyDataService) {
  
  }

  ngOnInit() {
  }

  async setCountry() {
   await this.mds.set("country", this.countryName);
  }
}
