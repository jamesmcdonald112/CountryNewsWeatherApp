import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonRadioGroup, IonItem, IonRadio, IonList } from '@ionic/angular/standalone';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: true,
  imports: [IonList, IonRadio, IonItem, IonRadioGroup, IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class SettingsPage implements OnInit {
  selectedSetting: string = 'metric';

  constructor() { 
  
  }

  ngOnInit() {
  }

}
