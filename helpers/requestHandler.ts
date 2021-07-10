import { errorHandler } from "./errorHandler.helper.ts";
import { TPromiseReturnType } from "../types.ts";
import { config } from "../deps.ts";

const { API_ENDPOINT } = config({ safe: true });
const BTC_PRICE_ENDPOINT: string = API_ENDPOINT;

type TCurrency = {
  current_price: { [key: string]: number };
};

type TData = {
  market_data: TCurrency;
};

type TRequestData = TData;

export const getBTCPrice = async (
  currency: string
): Promise<TPromiseReturnType> => {
  try {
    const fetchData: Response = await fetch(BTC_PRICE_ENDPOINT);
    const data: TRequestData = await fetchData.json();

    return data.market_data.current_price[currency];
  } catch (err) {
    errorHandler(err);
  }
};
