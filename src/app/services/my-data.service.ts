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
    await this.set('countryCca2Code', code);
  }

  async getCountryCca2Code(): Promise<string | null > {
    return await this.get('countryCca2Code');
  }

  async setCapitalCity(capital: string) {
    await this.set('capitalCity', capital);
  }

  async getCapitalCity(): Promise<string | null> {
    return await this.get('capitalCity');
  }

  async setUnits(units: string) {
    await this.set('units', units);
  }

  async getUnits(): Promise<string | null> {
    return await this.get('units')
  }
}
