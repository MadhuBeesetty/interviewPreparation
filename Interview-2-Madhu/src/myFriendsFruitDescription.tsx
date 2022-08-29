import { FruitDescription } from './Interview'

export const myFriendsFruitDescription: FruitDescription = {
  type: "any condition",
  conditions: [
    {type: 'every condition', conditions: [
      {type: 'less than', price: 3},
      {type: 'greater than', price: 1},
    ]},
    {type: 'every condition', conditions: [
      {type: 'equals', color: "green"},
      {type: 'less than', price: 30},
      {type: 'greater than', price: 20},
    ]},
    {type: 'every condition', conditions: [
      {type: 'not equals', color: 'red'},
      {type: 'not equals', color: 'orange'},
      {type: 'not equals', color: 'yellow'},
      {type: 'not equals', color: 'blue'},
      {type: 'any condition', conditions: [
        {type: 'every condition', conditions: [
          {type: 'less than', price: 50},
          {type: 'greater than', price: 40},
        ]},
        {type: 'every condition', conditions: [
          {type: 'equals', color: 'violet'},
          {type: 'greater than', price: 100},
        ]},
      ]}
    ]}
  ]
}