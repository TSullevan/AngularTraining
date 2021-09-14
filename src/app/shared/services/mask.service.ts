import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MaskService {

  constructor() { }

  public cpfMask(text: string): string {
    text = text.replace(/\D/g, "")

    if (text.length <= 11) {
      text = text.replace(/(\d{3})(\d)/, "$1.$2")
      text = text.replace(/(\d{3})(\d)/, "$1.$2")
      text = text.replace(/(\d{3})(\d{1,2})$/, "$1-$2")
    }
    return text;
  }
}
