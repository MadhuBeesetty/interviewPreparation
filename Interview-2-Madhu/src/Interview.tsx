/*
 ______   __     __   ______   __       ______   ______       
/_____/\ /__/\ /__/\ /_____/\ /_/\     /_____/\ /_____/\      
\::::_\/_\ \::\\:.\ \\:::_ \ \\:\ \    \:::_ \ \\:::_ \ \     
 \:\/___/\\_\::_\:_\/ \:(_) \ \\:\ \    \:\ \ \ \\:(_) ) )_   
  \::___\/_ _\/__\_\_/\\: ___\/ \:\ \____\:\ \ \ \\: __ `\ \  
   \:\____/\\ \ \ \::\ \\ \ \    \:\/___/\\:\_\ \ \\ \ `\ \ \ 
    \_____\/ \_\/  \__\/ \_\/     \_____\/ \_____\/ \_\/ \_\/ 
  Technical Interview 0x02: Fruit Syntax Trees

  This year, you and your bestie were supposed to travel to the 
  fruit convention to buy exotic fruits. Unfortunately, your 
  friend missed the bus and will not make it to the convention
  this year. To comfort them, you've offered to buy their fruits
  yourself. They've provided you with a detailed description you
  can use to make their purchases. In fact, they have even 
  provided you a schema for their description.

  Your challenge is to:

  1) Find every fruit for sale at the fruit convention that 
  matches your friend's description. Make sure to do this in 
  generality, as your friend has suggested they may send you
  a new description on the next day of the convention.
*/

import _ from 'lodash'

export interface FruitDescription {
  type: 'every condition' | 'any condition'
  conditions: (FruitDescription | FruitPriceCondition | FruitColorCondition)[]
}

interface FruitPriceCondition {
  type: 'less than' | 'greater than'
  price: number
}

interface FruitColorCondition {
  type: 'equals' | 'not equals'
  color: Color
}

type Color = 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'indigo' | 'violet'

export interface Fruit {
  name: string
  color: Color
  price: number
}

// export const myFriendsFruitDescription: FruitDescription = {
//   type: "any condition",
//   conditions: [
//     {type: 'every condition', conditions: [
//       {type: 'less than', price: 3},
//       {type: 'greater than', price: 1},
//     ]},
//     {type: 'every condition', conditions: [
//       {type: 'equals', color: "green"},
//       {type: 'less than', price: 30},
//       {type: 'greater than', price: 20},
//     ]},
//     {type: 'every condition', conditions: [
//       {type: 'not equals', color: 'red'},
//       {type: 'not equals', color: 'orange'},
//       {type: 'not equals', color: 'yellow'},
//       {type: 'not equals', color: 'blue'},
//       {type: 'any condition', conditions: [
//         {type: 'every condition', conditions: [
//           {type: 'less than', price: 50},
//           {type: 'greater than', price: 40},
//         ]},
//         {type: 'every condition', conditions: [
//           {type: 'equals', color: 'violet'},
//           {type: 'greater than', price: 100},
//         ]},
//       ]}
//     ]}
//   ]
// }

// [every -> any -> every -> any ]....


export const fruitsMatchingMyFriendsDescription = (
  fruitsForSale: Fruit[],
  myFriendsFruitDescription: FruitDescription
): Fruit[] => {

  const recEvery = (givenCondition: (FruitDescription | FruitPriceCondition | FruitColorCondition)[], fruit: Fruit): boolean => {
    if(givenCondition.type === "every condition"){
       let fruitSale: boolean = true;
      givenCondition.conditions.map((e) => {
        if(e.type === "every condition") recEvery(e.conditions, fruit);
        if(e.type === 'less than'){
          fruit.price > e.price;
          fruitSale = false;
          return fruitSale;
        };
         if(e.type === 'greater than'){
          if(fruit.price < e.price){
          fruitSale = false;
          return fruitSale;
          };
        };
        if(e.type === 'equals'){
          if(fruit.color !== 'e.color'){
            fruitSale = false;
            return fruitSale;
          }
        }
      })
    }else{
          recAny(e.conditions, fruit);   
    }
  };

const recAny = (givenCondition: (FruitDescription | FruitPriceCondition | FruitColorCondition)[], fruit: Fruit): boolean => {
   if(givenCondition.type === "any condition"){
      givenCondition.conditions.map((e) => {
        if(e.type === "every condition"){ recEvery(e.conditions, fruit)}else{
          recAny(e.conditions, fruit);
        }
        if(e.type === 'less than'){
          if(fruit.price < e.price){
             return true;
          };
        };
         if(e.type === 'greater than'){
          if(fruit.price > e.price){
          return true;
          };
        };
        if(e.type === 'equals'){
          if(fruit.color !== 'e.color'){
            return true;
          }
        }
      })
    };
};

  let outPut: [];
  
 if(givenCondition.type === "every condition"){
   fruitsForSale.map(e =>{ if(recEvery(myFriendsFruitDescription, e) === true){outPut.push(e)}});
 }else{
   fruitsForSale.map(e =>{ if(allEvery(myFriendsFruitDescription, e) === true){outPut.push(e)}});
 }
  
  return outPut;
}