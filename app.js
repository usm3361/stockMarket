import {
  filterStocksByPrice,
  searchStock,
  operateOnStock,
} from "./utils/stockExchange.js";
import { printMenu } from "./utils/menuPrint.js";
import input from "analiza-sync";

export function startTrade(){
    let trade = true;
    while (trade) {
        let choice = printMenu();

        if (choice === "1") {
            const identifier = input(
                "Please enter the ID or name of the stock you are looking for\nPlease enter:   "
            );
            searchStock(identifier);
        } else if (choice === "2") {
            const givenPrice = parseInt(input("Please enter a stock price\nprice:   "));
            let above;
            const aboveOrbelow = input("Do you want above price Y/N:   ");
            if (aboveOrbelow === "y" || aboveOrbelow === "Y") {
                above = true;
            } else if (aboveOrbelow === "n" || aboveOrbelow === "N") {
                above = false;
            }
            filterStocksByPrice(givenPrice, above);
        } else if (choice === "3") {
            console.log("1. i want to buy");
            console.log("2. i want to sell");
            const operation = input(
                "Please enter number if you would like to sell or buy:     "
            );
            const identifier = input(
                "Please enter an identifier on which you would like to perform the operation\nidentifier:    "
            );
            if (operation === 1) {
                operateOnStock("buy", identifier);
            } else {
                operateOnStock("sell", identifier);
            }
        } else if (choice === "4") {
            trade = false;
        }
    }
}

startTrade()