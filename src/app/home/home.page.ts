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
import { Router } from '@angular/router';
import { DomUtilsService } from '../services/dom-utils.service';

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
  searchTerm: string = '';

  constructor(
    private mds: MyDataService,
    private router: Router,
    private domUtils: DomUtilsService
  ) {}

  ngOnInit() {}

  public navigateSetting() {
    this.domUtils.blurActiveButton();

    this.router.navigate(['/settings']);

  }

  public get isButtonDisabled(): boolean {
    return this.searchTerm.trim() === '';
  }


  public async setSearchTermAndNavigate() {
    this.domUtils.blurActiveButton();

    await this.setSearchTerm();

    this.router.navigate(['/countries']);
  }

  private async setSearchTerm() {
    await this.mds.set('searchTerm', this.searchTerm);
  }

  
}
