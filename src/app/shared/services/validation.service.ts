import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  public cpfValidation(cpf: string): boolean {

    if ((cpf = cpf.replace(/[^\d]/g, "")).length != 11) {
      return false
    }

    if (cpf == "00000000000") {
      return false;
    }

    let rest;
    let sum = 0;

    for (let index = 1; index <= 9; index++) {
      sum = sum + parseInt(cpf[index - 1]) * (11 - index);
    }

    rest = (sum * 10) % 11;

    if ((rest == 10) || (rest == 11)) {
      rest = 0;
    }

    if (rest != parseInt(cpf[9])) {
      return false;
    }

    sum = 0;

    for (let index = 1; index <= 10; index++) {
      sum = sum + parseInt(cpf[index - 1]) * (12 - index);
    }

    rest = (sum * 10) % 11;

    if ((rest == 10) || (rest == 11)) {
      rest = 0;
    }

    if (rest != parseInt(cpf[10])) {
      return false;
    }

    return true;
  }
}
