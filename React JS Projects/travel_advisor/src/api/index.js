import axios from 'axios';


export const getPlacesData = async (type, sw, ne) => {
    try {
      //console.log(type);
        const {data: {data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
          method: 'GET',
          //url: 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary',
          params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
          },
          headers: {
            'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_TRAVEL_API_KEY,
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
        });
        return data;
    } catch (error) {
        console.error(error);
    }
}