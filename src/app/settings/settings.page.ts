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
  IonRadioGroup,
  IonItem,
  IonRadio,
  IonList,
  IonButton,
} from '@ionic/angular/standalone';
import { MyDataService } from '../services/my-data.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: true,
  imports: [
    IonButton,
    IonList,
    IonRadio,
    IonItem,
    IonRadioGroup,
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
export class SettingsPage implements OnInit {
  selectedSetting: string = 'metric';

  constructor(private mds: MyDataService) {}

  async ngOnInit() {
    this.loadSetting();
  }

  private async loadSetting() {
    this.selectedSetting = await this.mds.get('setting') || 'metric';
  }

  public async saveSetting() {
    await this.mds.set('setting', this.selectedSetting);
  }
}
