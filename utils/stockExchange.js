import input from "analiza-sync";
import { stockMarket } from "../data/data.js";

export function searchStock(identifier) {
  return stockMarket.stocks.filter(
    (stock) => stock.name === identifier || stock.id === identifier
  );
}

export function filterStocksByPrice(givenPrice, above) {
  let arreyStock = [];
  if (above === true) {
    arreyStock = stockMarket.stocks.filter(
      (stock) => stock.currentPrice > givenPrice
    );
  } else {
    arreyStock = stockMarket.stocks.filter(
      (stock) => stock.currentPrice < givenPrice
    );
  }
  if (arreyStock.length === 0) {
    console.log("not found stocks");
    return arreyStock;
  }
  return arreyStock;
}

export function operateOnStock(operation, identifier) {
  const foundStock = stockMarket.stocks.find(
    (stock) => stock.id === identifier || stock.name === identifier
  );
  if (!foundStock) {
    console.log("Stock not found with identifier:", identifier);
    return;
  }
  if (operation !== "buy" && operation !== "sell") {
    console.log("invalid operation. Must be 'buy' or 'sell'.");
    return;
  }

  const amountStr = input(`how many units to ${operation}?\n`);
  const amount = parseInt(amountStr);
  if (isNaN(amount) || amount <= 0) {
    console.log("invalid amount entered");
    return;
  }
  const mainMultiplier = operation === "buy" ? 1.05 : 0.95;
  const categoryMultiplier = operation === "buy" ? 1.01 : 0.99;

  if (operation === "buy") {
    if (foundStock.availableStocks >= amount) {
      foundStock.availableStocks -= amount;
    } else {
      console.log("not enough stock available for purchase!");
      return;
    }
  } else {
    foundStock.availableStocks += amount;
  }
  foundStock.previousPrices.push(foundStock.currentPrice);
  foundStock.currentPrice = foundStock.currentPrice * mainMultiplier;

  stockMarket.stocks.forEach((stock) => {
    if (stock.category === foundStock.category && stock.id !== foundStock.id) {
      stock.previousPrices.push(stock.currentPrice);
      stock.currentPrice = stock.currentPrice * categoryMultiplier;
    }
  });
  stockMarket.lastUpdated = new Date().toISOString()
  console.log(`Successfully ${operation} ${amount} units of stock ${foundStock.name}`)
}
