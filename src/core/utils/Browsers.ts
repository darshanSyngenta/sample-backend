export const getBrowserName = () => {
  const wdw = window as any;

  const matchesUserAgent = (regexp: RegExp) => {
    return regexp.test(wdw.navigator.userAgent);
  };
  switch (true) {
    case matchesUserAgent(/edg/i):
      return 'edge';
    case matchesUserAgent(/opr/i) && (!!wdw.opr || !!wdw.opera):
      return 'opera';
    case matchesUserAgent(/chrome/i) && !!wdw.chrome:
      return 'chrome';
    case matchesUserAgent(/trident/i):
      return 'ie';
    case matchesUserAgent(/firefox/i):
      return 'firefox';
    case matchesUserAgent(/safari/i):
      return 'safari';
    default:
      return 'other';
  }
};
