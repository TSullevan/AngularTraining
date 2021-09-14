import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'abbreviate'
})
export class AbbreviatePipe implements PipeTransform {

  private middleName(fullName: string, firstName: string, lastName: string): string {
    return fullName.replace(firstName, '').replace(lastName, '');
  }

  private toUpperFirstLetter(text: string): string {
    let firstLetter = text[0].toUpperCase();
    let newString = firstLetter + text.slice(1).toLowerCase();
    return newString
  }

  isEmptyNullOrUndefined(fullName: string) {
    if (fullName == '' || fullName == null || fullName == undefined) {
      return true;
    }
    return false;
  }

  transform(fullName: string): string {
    if (this.isEmptyNullOrUndefined(fullName)) {
      return '-';
    }
    fullName = fullName.trim();
    let firstName = fullName.split(' ')[0];
    firstName = this.toUpperFirstLetter(firstName);

    if(firstName.toLowerCase() == fullName.toLowerCase())
      return firstName;

    let lastName = fullName.split(' ')[fullName.split(' ').length - 1];
    lastName = this.toUpperFirstLetter(lastName);
    let middleName = this.middleName(fullName, firstName, lastName);

    let nameLength = middleName.split(' ').length - 1;
    let newMiddleName = '';

    for (let i = 1; i < nameLength; i++) {
      let nameSplit = middleName.split(' ')[i];
      nameSplit = this.toUpperFirstLetter(nameSplit);
      if (nameSplit.length > 3)
        newMiddleName += nameSplit[0] + '. ';
      else
        newMiddleName += nameSplit + ' ';
    }
    return firstName + ' ' + newMiddleName + ' ' + lastName;
  }

}
