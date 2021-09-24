import React, { useContext, useEffect, useState } from 'react'
import { globalContext } from '../../context/globalContext';
import { fetchCovid } from '../../api/covid';
import CountriesJSON from "../../json/countries.json";
import ChartList from './chartList'

function ChartContainer(props) {
  const [isLoading, setIsLoading] = useState(true)
  const { date, updateCountries } = useContext(globalContext);

  async function doApi() {
    setIsLoading(true)

    const promises = CountriesJSON.map(async (country) => {
      const result = await fetchCovid(date.from, date.to, country.name);
      return result;
    });

    const countriesData = await Promise.all(promises);
    updateCountries(countriesData);
    setIsLoading(false)
  }


  useEffect(() => {
    doApi()
  }, [date])


  if (isLoading) {
    return (<div>loading...</div>)
  }

  return (
    <ChartList />
  )
}

export default ChartContainer