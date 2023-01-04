#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
type PKR = {
  USD: number;
  GBP: number;
  PKR: number;
};
type GBP = {
  USD: number;
  GBP: number;
  PKR: number;
};
type USD = {
  USD: number;
  GBP: number;
  PKR: number;
};
let Converters = {
  PKR: {
    USD: 0.0044,
    GBP: 0.0037,
    PKR: 1,
  },
  GBP: {
    USD: 1.21,
    PKR: 271.79,
    GBP: 1,
  },
  USD: {
    PKR: 225.5,
    GBP: 0.83,
    USD: 1,
  },
};

const answer: {
  from: "PKR" | "GBP" | "USD";
  to: "PKR" | "GBP" | "USD";
  amount: number;
} = await inquirer.prompt([
  {
    type: "list",
    name: "from",
    choices: ["PKR", "GBP", "USD"],
    message: "Select Your Currency from the list: ",
  },
  {
    type: "list",
    name: "to",
    choices: ["PKR", "GBP", "USD"],
    message: "Select Currency you want to convert:",
  },
  {
    type: "number",
    name: "amount",
    message: "Enter Your convertion amount:",
  },
]);

const { from, to, amount } = answer;

if (from && to && amount) {
  let result = Converters[from][to] * amount;
  console.log(`Your ${amount} ${from} is ${result} ${to}`);
} else {
  console.log("Invalid Inputs");
}
