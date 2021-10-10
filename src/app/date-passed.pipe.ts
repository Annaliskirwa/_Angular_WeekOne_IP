import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datePassed'
})
export class DatePassedPipe implements PipeTransform {

  transform(value: any): number {
    let today: Date = new Date()
    let todayWithoutTime: any = new Date(today.getFullYear(),today.getMonth(), today.getDate());
    var dateDiff = Math.abs(todayWithoutTime - value);
    var dateCounter = Math.floor(dateDiff/(1000*60*60*24));

    return dateCounter;
  }
}
