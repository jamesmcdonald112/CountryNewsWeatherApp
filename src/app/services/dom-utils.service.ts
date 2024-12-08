import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DomUtilsService {

  constructor() { }

  public blurActiveButton(): void {
     // Used to avoid aria hidden element when changing page
     const button = document.activeElement as HTMLElement;
     if (button) {
       button.blur();
     }
  }
}
