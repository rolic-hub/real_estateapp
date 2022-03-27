
import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'

 export const PropertyApi = async (url)=>{
    const { data } = await axios.get((url), {
      headers: {
        "x-rapidapi-host": "bayut.p.rapidapi.com",
        "x-rapidapi-key": process.env.BAYUT_API,
      },
    });
    return data;
}

