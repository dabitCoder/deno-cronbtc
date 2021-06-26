type TCurrencies = { [key: string]: string };
type TMarketData = {
  '"current_price"': Array<TCurrencies>;
};

export type TPromiseReturnType = void | Array<TMarketData>;
