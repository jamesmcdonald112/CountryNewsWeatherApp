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
    IonCardContent,
    IonCardTitle,
    IonCardHeader,
    IonCard,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
  ],
})
export class NewsPage implements OnInit {
  newsResults: any = [];
  countryName: string = '';
  noNews: boolean = false;

  constructor(
    private newsApiService: NewsApiServiceService,
    private mds: MyDataService
  ) {}

  ngOnInit() {
    this.loadNewsData();
  }

  private async loadNewsData() {
    const countryCode = (await this.mds.getCountryCca2Code()) || '';
    this.countryName = (await this.mds.getCountry()) || 'Unknown Country';

    if (countryCode) {
      await this.getNewsData(countryCode);
    } else {
      console.error('No country code found');
    }
  }

  private async getNewsData(countryCca2Code: string) {
    try {
      const newsData = await this.newsApiService.getNewsByCountry(
        countryCca2Code
      );
      if (newsData && newsData.results && Array.isArray(newsData.results)) {
        this.newsResults = newsData.results;
        this.noNews = false;
        console.log('News data:', this.newsResults);
      } else {
        this.noNews = true;
        this.newsResults = [];
        console.log('No news data available');
      }
    } catch (error: any) {
      console.error('Error getting news:', error);
      this.newsResults = [];
      this.noNews = true;
    }
  }
}
