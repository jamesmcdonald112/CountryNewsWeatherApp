import { Injectable } from '@angular/core';
import { CapacitorConfig } from '@capacitor/cli';
import { Capacitor, CapacitorHttp, HttpOptions } from '@capacitor/core';


@Injectable({
  providedIn: 'root'
})
export class MyHttpService {

  constructor() { }

  async get(options: HttpOptions) {
    return await CapacitorHttp.get(options)
  }
}
