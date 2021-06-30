import { everyMinute } from "./deps.ts";
import { getBTCPrice } from "./helpers/requestHandler.ts";
import { TPromiseReturnType } from "./types.ts";

const run = (): void => {
  everyMinute(async () => {
    const price: TPromiseReturnType = await getBTCPrice("usd");

    return price && price > 0
      ? console.log(`The current price of BTC is ${price} USD.`)
      : console.log("Oh my god, BTC price dropped to 0. RUN AND BUY MORE.");
  });
};

run();
