import input from "analiza-sync";
import { stockMarket } from "../data/data";
import { updateStockCount } from "./updateFunc";

export function searchStock(identifier) {
  return stockMarket.stocks.filter(
    (stock) => stock.name === identifier || stock.id === identifier
  );
}

export function filterStocksByPrice(givenPrice, above) {
  let arreyStock 
    if (above === true) {
    arreyStock = stockMarket.stocks.filter(
      (stock) => stock.currentPrice > givenPrice
    );
  } else (above === false) {
    arreyStock = stockMarket.stocks.filter(
      (stock) => stock.currentPrice < givenPrice
    );
}
    if (arreyStock.length === 0) {
        console.log('not found stocks')
        return arreyStock
    } arreyStock = []
    return arreyStock
}

export function operateOnStock(operation, identifier) {
    const found = stockMarket.stocks.find(stock => stock.id === identifier || stock.name === identifier)
    if (operation === 'buy' && found.length > 0) {
        const amount = input('how many units to buy or sell:\n')
        found.availableStocks -= amount
        found.currentPrice
        
    } else if (operation === 'sell' && found.length > 0) {
        const amount = input('how many units to sell or sell:\n')
        found.availableStocks += amount
    }
    
}

