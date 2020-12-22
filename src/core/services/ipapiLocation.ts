import axios from 'axios';

// replace below key with your actual key from ipapi account
const accessKey = '91e785e41df26c2157f401ff82885367';

/**
 * please refer: https://www.ipify.org/
 */
const getPublicIP = async (): Promise<string | undefined> => {
  const response = await axios.get('https://api.ipify.org');

  return response.data;
};

/**
 * please  refer: https://ipapi.com/documentation
 */
export const getUserLocationDetails = async (): Promise<any | undefined> => {
  try {
    const myPublicIP = await getPublicIP();
    const url = 'http://api.ipapi.com/' + myPublicIP + '?access_key=' + accessKey;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    // tslint:disable-next-line:no-console
    console.error(error);
  }
};
