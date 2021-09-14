import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {

  constructor() { }

  public onlyNumbers(text: string) {
    return text.replace(/\D/g, "");
  }
}
