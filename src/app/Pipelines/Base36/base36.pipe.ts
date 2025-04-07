import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'base36',
})
export class Base36Pipe implements PipeTransform {
  private MAX_LICENSE_PLATE_LENGHT: number = 6;
  private DEFAULT_LICENSE_PLATE_VALUE: string = '0';

  public base36Result: string = '000000';

  transform(value: number): string {
    return this.ensureLength(this.parseToBase36(value));
  }

  parseToBase36(decimal: number) {
    var quotient = decimal;
    var result = '';
    var remainder = 0;
    while ((remainder = quotient % 36)) {
      result = this.parseNumberToBase36Character(remainder) + result;
      quotient = Math.floor(quotient / 36);
    }
    return result;
  }

  parseNumberToBase36Character(numberToConvert: number) {
    if (this.onLimits(numberToConvert)) {
      if (numberToConvert <= 9) return numberToConvert;
      return String.fromCharCode(numberToConvert + 55);
    }
    throw new Error('ERROR GENERATING CHARACTER');
  }

  onLimits(numberToCheck: number): boolean {
    return numberToCheck < 35 || numberToCheck > 0;
  }

  ensureLength(actualValue: string) {
    return actualValue.length < this.MAX_LICENSE_PLATE_LENGHT
      ? actualValue.padStart(
          this.MAX_LICENSE_PLATE_LENGHT,
          this.DEFAULT_LICENSE_PLATE_VALUE
        )
      : actualValue;
  }
}
