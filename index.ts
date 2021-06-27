import { everyMinute } from "./deps.ts";
import { TPromiseReturnType } from "./utils/types.ts";
import { errorHandler } from "./errorHandler.helper.ts";

const BTC_PRICE_ENDPOINT = "https://api.coingecko.com/api/v3/coins/bitcoin";

export const getPrice = async (
  endpoint: string = BTC_PRICE_ENDPOINT,
  currency = "usd"
): Promise<TPromiseReturnType> => {
  try {
    const data = await (await fetch(endpoint)).json();
    return data.market_data.current_price[currency];
  } catch (err) {
    errorHandler(err);
  }
};

const run = (): void => {
  everyMinute(async () => {
    const price = await getPrice();

    return price && price > 0
      ? console.log(`The current price of BTC is ${price} USD.`)
      : console.log("Oh my god, BTC price dropped to 0. RUN AND BUY MORE.");
  });
};

run();
