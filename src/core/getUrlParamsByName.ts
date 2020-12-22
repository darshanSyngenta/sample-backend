export const getParamValue = (parameterName: string) => {
  let result: string = '';
  let tmp: string[] = [];
  const items = location.search.substr(1).split('&');
  for (const item of items) {
    tmp = item.split('=');
    if (tmp[0] === parameterName) {
      result = decodeURIComponent(tmp[1]);
    }
  }
  return result;
};
