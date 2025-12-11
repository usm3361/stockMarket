import {
  filterStocksByPrice,
  searchStock,
  operateOnStock,
} from "./utils/stockExchange.js";
import { printMenu } from "./utils/menuPrint.js";
import input from "analiza-sync";

export function startTrade() {
  let trade = true;
  while (trade) {
    let choice = printMenu();

    if (choice === "1") {
      const identifier = input(
        "Please enter the ID or name of the stock you are looking for\nPlease enter:   "
      );
      const arrey = searchStock(identifier);
      console.log("found this stock:", arrey);
    } else if (choice === "2") {
      const givenPrice = parseInt(
        input("Please enter a stock price\nprice:   ")
      );
      let above;
      const aboveOrbelow = input("Do you want above price Y/N:   ");
      if (aboveOrbelow === "y" || aboveOrbelow === "Y") {
        above = true;
      } else if (aboveOrbelow === "n" || aboveOrbelow === "N") {
        above = false;
      }
      const arreyPrice = filterStocksByPrice(givenPrice, above);
      console.log("this is array of givenPrice:", arreyPrice);
    } else if (choice === "3") {
      console.log("1. if want to buy");
      console.log("2. if want to sell");
      const operation = input(
        "Please enter number if you would like to sell or buy:     "
      );
      const identifier = input(
        "Please enter an identifier on which you would like to perform the operation\nidentifier:    "
      );
      if (operation === 1) {
        operateOnStock("buy", identifier);
        console.log("The stock purchase was successful");
      } else {
        operateOnStock("sell", identifier);
        console.log("The stock sale was successful");
      }
    } else if (choice === "4") {
      console.log("The stock market is closed, GoodBye.");
      trade = false;
    }
  }
}

startTrade();
