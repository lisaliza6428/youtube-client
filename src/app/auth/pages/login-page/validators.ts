import { FormControl } from '@angular/forms';

export function validateSpecial(c: FormControl) {
  const reg = /[`!?@#$%^&*]+/;

  return reg.test(c.value) ? null : {
    validateSpecial: {
      valid: false,
    },
  };
}

export function validateUpperLowerCase(c: FormControl) {
  const reg = /[A-Z][a-z]+/;

  return reg.test(c.value) ? null : {
    validateUpperLowerCase: {
      valid: false,
    },
  };
}

export function validateNumbersLetters(c: FormControl) {
  const reg = /[0-9]+/;

  return reg.test(c.value) ? null : {
    validateNumbersLetters: {
      valid: false,
    },
  };
}