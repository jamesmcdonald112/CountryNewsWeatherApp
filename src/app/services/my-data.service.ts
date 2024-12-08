import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class MyDataService {

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    const storage = await this.storage.create();
  }

  async set(key: string, value:any) {
    await this.storage.set(key, value);
  }

  async get(key: string) {
    return await this.storage.get(key);
  }

  async setCountryCode(code: string) {
    await this.set('country_cca2_code', code);
  }

  async getCountryCca2Code(): Promise<string | null > {
    return await this.get('country_cca2_code');
  }
}
