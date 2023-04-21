// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export type User = {
  id: number
  name: string 
}

export interface messageType { 
  titleMsg : {
      mainPart?: string,
      restPart?: string,
  }
}

export interface stringType {
  cityAndCountry : { city:string , country : string } 
}

export type SingleCityProps = {
  city: string ,
  country: string
}

export type FetcherVariables = {[key: string]: string | any | undefined}

export type cityDetailProops = { 

  localLivingCost : {
    city?: string,
    country?: string,
  },
  localCovidData : {
    city?: string,
    country?: string,
  },
  localInternetData : {
    error?: string,
    broadbandSpeed?: string,
    city?: string,
    mobileSpeed?: string,
    variables?: FetcherVariables
  }
}

// export interface 

export interface currencyType {
  AED: {
  rate: number,
  name: string
};
  AFN: {
  rate: number,
  name: string
};
  ALL: {
  rate: number,
  name: string
};
  AMD: {
  rate: number,
  name: string
};
  ANG: {
  rate: number,
  name: string
};
  AOA: {
  rate: number,
  name: string
};
  ARS: {
  rate: number,
  name: string
};
  AUD: {
  rate: number,
  name: string
};
  AWG: {
  rate: number,
  name: string
};
  AZN: {
  rate: number,
  name: string
};
  BAM: {
  rate: number,
  name: string
};
  BBD: {
  rate: number,
  name: string
};
  BDT: {
  rate: number,
  name: string
};
  BGN: {
  rate: number,
  name: string
};
  BHD: {
  rate: number,
  name: string
};
  BIF: {
  rate: number,
  name: string
};
  BMD: {
  rate: number,
  name: string
};
  BND: {
  rate: number,
  name: string
};
  BOB: {
  rate: number,
  name: string
};
  BRL: {
  rate: number,
  name: string
};
  BSD: {
  rate: number,
  name: string
};
  BTC: {
  rate: number,
  name: string
};
  BTN: {
  rate: number,
  name: string
};
  BWP: {
  rate: number,
  name: string
};
  BYN: {
  rate: number,
  name: string
};
  BYR: {
  rate: number,
  name: string
};
  BZD: {
  rate: number,
  name: string
};
  CAD: {
  rate: number,
  name: string
};
  CDF: {
  rate: number,
  name: string
};
  CHF: {
  rate: number,
  name: string
};
  CLF: {
  rate: number,
  name: string
};
  CLP: {
  rate: number,
  name: string
};
  CNY: {
  rate: number,
  name: string
};
  COP: {
  rate: number,
  name: string
};
  CRC: {
  rate: number,
  name: string
};
  CUC: {
  rate: number,
  name: string
};
  CUP: {
  rate: number,
  name: string
};
  CVE: {
  rate: number,
  name: string
};
  CZK: {
  rate: number,
  name: string
};
  DJF: {
  rate: number,
  name: string
};
  DKK: {
  rate: number,
  name: string
};
  DOP: {
  rate: number,
  name: string
};
  DZD: {
  rate: number,
  name: string
};
  EGP: {
  rate: number,
  name: string
};
  ERN: {
  rate: number,
  name: string
};
  ETB: {
  rate: number,
  name: string
};
  EUR: {
  rate: number,
  name: string
};
  FJD: {
  rate: number,
  name: string
};
  FKP: {
  rate: number,
  name: string
};
  GBP: {
  rate: number,
  name: string
};
  GEL: {
  rate: number,
  name: string
};
  GGP: {
  rate: number,
  name: string
};
  GHS: {
  rate: number,
  name: string
};
  GIP: {
  rate: number,
  name: string
};
  GMD: {
  rate: number,
  name: string
};
  GNF: {
  rate: number,
  name: string
};
  GTQ: {
  rate: number,
  name: string
};
  GYD: {
  rate: number,
  name: string
};
  HKD: {
  rate: number,
  name: string
};
  HNL: {
  rate: number,
  name: string
};
  HRK: {
  rate: number,
  name: string
};
  HTG: {
  rate: number,
  name: string
};
  HUF: {
  rate: number,
  name: string
};
  IDR: {
  rate: number,
  name: string
};
  ILS: {
  rate: number,
  name: string
};
  IMP: {
  rate: number,
  name: string
};
  INR: {
  rate: number,
  name: string
};
  IQD: {
  rate: number,
  name: string
};
  IRR: {
  rate: number,
  name: string
};
  ISK: {
  rate: number,
  name: string
};
  JEP: {
  rate: number,
  name: string
};
  JMD: {
  rate: number,
  name: string
};
  JOD: {
  rate: number,
  name: string
};
  JPY: {
  rate: number,
  name: string
};
  KES: {
  rate: number,
  name: string
};
  KGS: {
  rate: number,
  name: string
};
  KHR: {
  rate: number,
  name: string
};
  KMF: {
  rate: number,
  name: string
};
  KPW: {
  rate: number,
  name: string
};
  KRW: {
  rate: number,
  name: string
};
  KWD: {
  rate: number,
  name: string
};
  KYD: {
  rate: number,
  name: string
};
  KZT: {
  rate: number,
  name: string
};
  LAK: {
  rate: number,
  name: string
};
  LBP: {
  rate: number,
  name: string
};
  LKR: {
  rate: number,
  name: string
};
  LRD: {
  rate: number,
  name: string
};
  LSL: {
  rate: number,
  name: string
};
  LTL: {
  rate: number,
  name: string
};
  LVL: {
  rate: number,
  name: string
};
  LYD: {
  rate: number,
  name: string
};
  MAD: {
  rate: number,
  name: string
};
  MDL: {
  rate: number,
  name: string
};
  MGA: {
  rate: number,
  name: string
};
  MKD: {
  rate: number,
  name: string
};
  MMK: {
  rate: number,
  name: string
};
  MNT: {
  rate: number,
  name: string
};
  MOP: {
  rate: number,
  name: string
};
  MRO: {
  rate: number,
  name: string
};
  MUR: {
  rate: number,
  name: string
};
  MVR: {
  rate: number,
  name: string
};
  MWK: {
  rate: number,
  name: string
};
  MXN: {
  rate: number,
  name: string
};
  MYR: {
  rate: number,
  name: string
};
  MZN: {
  rate: number,
  name: string
};
  NAD: {
  rate: number,
  name: string
};
  NGN: {
  rate: number,
  name: string
};
  NIO: {
  rate: number,
  name: string
};
  NOK: {
  rate: number,
  name: string
};
  NPR: {
  rate: number,
  name: string
};
  NZD: {
  rate: number,
  name: string
};
  OMR: {
  rate: number,
  name: string
};
  PAB: {
  rate: number,
  name: string
};
  PEN: {
  rate: number,
  name: string
};
  PGK: {
  rate: number,
  name: string
};
  PHP: {
  rate: number,
  name: string
};
  PKR: {
  rate: number,
  name: string
};
  PLN: {
  rate: number,
  name: string
};
  PYG: {
  rate: number,
  name: string
};
  QAR: {
  rate: number,
  name: string
};
  RON: {
  rate: number,
  name: string
};
  RSD: {
  rate: number,
  name: string
};
  RUB: {
  rate: number,
  name: string
};
  RWF: {
  rate: number,
  name: string
};
  SAR: {
  rate: number,
  name: string
};
  SBD: {
  rate: number,
  name: string
};
  SCR: {
  rate: number,
  name: string
};
  SDG: {
  rate: number,
  name: string
};
  SEK: {
  rate: number,
  name: string
};
  SGD: {
  rate: number,
  name: string
};
  SHP: {
  rate: number,
  name: string
};
  SLL: {
  rate: number,
  name: string
};
  SOS: {
  rate: number,
  name: string
};
  SRD: {
  rate: number,
  name: string
};
  STD: {
  rate: number,
  name: string
};
  SVC: {
  rate: number,
  name: string
};
  SYP: {
  rate: number,
  name: string
};
  SZL: {
  rate: number,
  name: string
};
  THB: {
  rate: number,
  name: string
};
  TJS: {
  rate: number,
  name: string
};
  TMT: {
  rate: number,
  name: string
};
  TND: {
  rate: number,
  name: string
};
  TOP: {
  rate: number,
  name: string
};
  TRY: {
  rate: number,
  name: string
};
  TTD: {
  rate: number,
  name: string
};
  TWD: {
  rate: number,
  name: string
};
  TZS: {
  rate: number,
  name: string
};
  UAH: {
  rate: number,
  name: string
};
  UGX: {
  rate: number,
  name: string
};
  USD: {
  rate: number,
  name: string
};
  UYU: {
  rate: number,
  name: string
};
  UZS: {
  rate: number,
  name: string
};
  VEF: {
  rate: number,
  name: string
};
  VND: {
  rate: number,
  name: string
};
  VUV: {
  rate: number,
  name: string
};
  WST: {
  rate: number,
  name: string
};
  XAF: {
  rate: number,
  name: string
};
  XAG: {
  rate: number,
  name: string
};
  XAU: {
  rate: number,
  name: string
};
  XCD: {
  rate: number,
  name: string
};
  XDR: {
  rate: number,
  name: string
};
  XOF: {
  rate: number,
  name: string
};
  XPF: {
  rate: number,
  name: string
};
  YER: {
  rate: number,
  name: string
};
  ZAR: {
  rate: number,
  name: string
};
  ZMK: {
  rate: number,
  name: string
};
  ZMW: {
  rate: number,
  name: string
};
  ZWL: {
  rate: number,
  name: string
};
}
export interface cType {
  rate: number,
  name: string
} 
