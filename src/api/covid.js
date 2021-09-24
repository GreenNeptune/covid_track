import axios from 'axios';
import { format } from 'date-fns';


export const fetchCovid = async (dateFrom, dateTo, country = "italy") => {

  try {
    dateFrom = format(dateFrom, "yyyy-MM-dd'T'00:00:00")
    dateTo = format(dateTo, "yyyy-MM-dd'T'00:00:00")

    const url = `https://api.covid19api.com/total/country/${country}?from=${dateFrom}Z&to=${dateTo}Z`
    let resp = await axios.get(url);
    return resp.data

  } catch (error) {
    return [];
  }
}
