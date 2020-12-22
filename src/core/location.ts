import { Client, Status } from '@googlemaps/google-maps-services-js';
import get from 'lodash/get';

const client = new Client({});
interface IGeoCoordinate {
  latitude: number;
  longitude: number;
}

export const getLocationFromBrowser = async (): Promise<IGeoCoordinate> => {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        resolve(position.coords);
      }, reject);
    } else {
      reject('Geolocation is not supported by this browser!');
    }
  });
};

const getGoogleMapsLibrary = () => client;
export const isGoogleLibraryLoaded = () => !!getGoogleMapsLibrary();

export const getCountryCode = async (): Promise<string> => {
  if (isGoogleLibraryLoaded()) {
    const geocoder = getGoogleMapsLibrary();
    const latlngLocation = await getLocationFromBrowser();

    const latlng = {
      lat: latlngLocation.latitude,
      lng: latlngLocation.longitude,
    };

    if (latlng) {
      const result = await geocoder.reverseGeocode({
        params: {
          latlng,
          key: process.env.GOOGLE_API_KEY || '',
        },
      });

      const results = result.data.results;
      if (result.data && result.data.status === Status.OK) {
        const shortName = getCountry(get(results, '[0].address_components'));
        if (!shortName) {
          throw new Error('Unable to find ADDRESS');
        }
        return shortName.toLowerCase();
      }
    }
  }
  return 'us';
};

function getCountry(addrComponents: any[]) {
  for (const addrComponent of addrComponents) {
    if (get(addrComponent, 'types[0]') === 'country') {
      return (addrComponent as any).short_name;
    }
  }
  return false;
}
