import defaultLogo from 'assets/images/cropwise_logo.svg';
import syngentaLogo from 'assets/images/syngenta_logo.svg';
import { iff } from 'core/iff';
import { getCountryCode } from 'core/location';
import React, { useEffect, useState } from 'react';

const brands: { [index: string]: { name: string; logo: any } } = {
  syngenta: {
    name: 'Syngenta Digital',
    logo: syngentaLogo,
  },
  default: {
    name: 'Cropwise',
    logo: defaultLogo,
  },
};

export const getBrandLogo = () => getBrand().logo;
export const getBrandName = () => getBrand().name;

function getBrand() {
  const href = window.location.href;

  if (href.match(/uk.+\.cropwise\.com/i) || href.includes('syngentadigital.co.uk')) {
    return brands.syngenta;
  }
  return brands.default;
}
