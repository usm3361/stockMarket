import input from "analiza-sync";
import { stockMarket } from "../data/data";

export function searchStock(identifier) {
  return stockMarket.stocks.filter(
    (stock) => stock.name === identifier || stock.id === identifier
  );
}

export function filterStocksByPrice(givenPrice, above) {
  if (above === true) {
    return stockMarket.stocks.filter(
      (stock) => stock.currentPrice > givenPrice
    );
  } else if (above === false) {
    return stockMarket.stocks.filter(
      (stock) => stock.currentPrice < givenPrice
    );
  }
}
