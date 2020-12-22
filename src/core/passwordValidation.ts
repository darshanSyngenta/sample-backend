import i18next from 'i18next';

export function rankPassword(password: string) {
  const upper = /[A-Z]/;
  const lower = /[a-z]/;
  const numberValue = /[0-9]/;
  const minLength = 8;

  const criteria = {
    upper: false,
    lower: false,
    number: false,
    minLength: false,
    isEmpty: false,
  };

  let score = 0;

  // Increment the score for each of these conditions
  if (password.length === 0) {
    criteria.isEmpty = true;
  }
  if (password.length >= minLength) {
    criteria.minLength = true;
    score++;
  }
  if (upper.test(password)) {
    criteria.upper = true;
    score++;
  }
  if (lower.test(password)) {
    criteria.lower = true;
    score++;
  }
  if (numberValue.test(password)) {
    criteria.number = true;
    score++;
  }

  return { score, criteria };
}

export function getStrength(pass: string) {
  return rankPassword(pass);
}

export function getPasswordErrorMessage(): { [id: string]: string } {
  return {
    minLength: i18next.t('At least 8 characters'),
    upper: i18next.t('One uppercase'),
    lower: i18next.t('One lowercase'),
    number: i18next.t('One number'),
  };
}

export function getPasswordText(criteria: any) {
  const truthy = Object.keys(criteria).filter((e) => !criteria[e]);
  return truthy.map((d) => getPasswordErrorMessage()[d]).join('\n');
}
