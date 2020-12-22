export const iff = (condition: boolean, trueRet: any, falseRet?: any) => {
  if (condition) {
    if (typeof trueRet === 'function') {
      return trueRet();
    }
    return trueRet;
  } else {
    if (typeof falseRet === 'function') {
      return falseRet();
    }
    return falseRet;
  }
};
