import { errorHandler } from "./errorHandler.helper.ts";
import { TPromiseReturnType } from "../types.ts";

const BTC_PRICE_ENDPOINT = "https://api.coingecko.com/api/v3/coins/bitcoin";

type TCurrency = {
  current_price: { [key: string]: number };
};

type TData = {
  market_data: TCurrency;
};

type TRequestData = TData;

export const getBTCPrice = async (
  currency: string,
): Promise<TPromiseReturnType> => {
  try {
    const fetchData: Response = await fetch(BTC_PRICE_ENDPOINT);
    const data: TRequestData = await fetchData.json();

    return data.market_data.current_price[currency];
  } catch (err) {
    errorHandler(err);
  }
};
