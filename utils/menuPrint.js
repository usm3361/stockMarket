import input from "analiza-sync";

export function printMenu() {
  console.log("====Menu====");
  console.log("1. Search for a stock by name or id");
  console.log("2. Show all stocks above or below a given price");
  console.log("3. Buy or sell a stock");
  console.log("4. exit");

  const choice = input("Please enter a number of your choice;\nchoice:    ");
  return choice

}

