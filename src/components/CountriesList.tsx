const CountriesList = ({ countriesList }: { countriesList: CountriesList }) => {
  return (
    <div>
      <ul className="list-none space-y-4 overflow-y-scroll">
        {countriesList.map((country, index: number) => (
          <li
            key={index}
            className="text-left flex border-2 p-2 items-center gap-4 rounded"
          >
            <img
              src={country.flags.svg}
              alt={country.flags.alt}
              className="h-14 w-14 object-cover rounded"
              loading="lazy"
            />
            <div>
              <p className="font-semibold">
                {country.name.common}{" "}
                <span className="text-gray-400">&middot;{country.flag}</span>
              </p>
              <p className="font-semibold text-sm text-gray-600">
                Region: {country.region}
              </p>
              <p className="font-semibold text-sm text-gray-600">
                Population: {new Intl.NumberFormat().format(country.population)}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountriesList;
