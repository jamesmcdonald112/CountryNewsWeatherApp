import { Injectable } from '@angular/core';
import { CapacitorConfig } from '@capacitor/cli';
import {
  Capacitor,
  CapacitorHttp,
  HttpOptions,
  HttpResponse,
} from '@capacitor/core';

@Injectable({
  providedIn: 'root',
})
export class MyHttpService {
  constructor() {}

  async get(options: HttpOptions): Promise<HttpResponse> {
    return await CapacitorHttp.get(options);
  }
}
