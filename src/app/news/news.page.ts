import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonList,
  IonItem,
  IonThumbnail,
  IonBackButton,
  IonButtons,
} from '@ionic/angular/standalone';
import { NewsApiServiceService } from '../services/news-api-service.service';
import { MyDataService } from '../services/my-data.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
  standalone: true,
  imports: [
    IonButtons,
    IonBackButton,
    IonItem,
    IonList,
    IonCardContent,
    IonCardSubtitle,
    IonCardTitle,
    IonCardHeader,
    IonCard,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonThumbnail,
  ],
})
export class NewsPage implements OnInit {
  url: string = '';
  newsResults: any = [];

  constructor(
    private newsApiService: NewsApiServiceService,
    private mds: MyDataService
  ) {}

  ngOnInit() {
    this.mds
      .getCountryCca2Code()
      .then((counntryCca2Code) => {
        if (counntryCca2Code) {
          this.getNewsData(counntryCca2Code);
        } else {
          console.error(' No Country Cca2 code found');
        }
      })
      .catch((error) => {
        console.log('Error retrieving country cca2 code');
      });
  }

  private async getNewsData(countryCca2Code: string) {
    try {
      const newsData = await this.newsApiService.getNewsByCountry(
        countryCca2Code
      );
      if (newsData && newsData.results) {
        this.newsResults = newsData.results;
        console.log('News data:', this.newsResults);
      } else {
        console.log('No news data available');
      }
    } catch (error) {
      console.error('Error getting news:', error);
    }
  }
}
