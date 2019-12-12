export const findCoinBase = (currencies ,coin) => {
   return currencies.find(el => el.key === coin);
};