type Country = {
  flags: FlagObj;
  name: nameObj;
  flag: string;
  region: string;
  population: number;
};

type FlagObj = {
  svg: string;
  alt: string;
};

type nameObj = {
  common: string;
};

type CountriesList = Country[];
