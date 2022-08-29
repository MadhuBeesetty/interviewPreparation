import * as React from 'react'
import './App.css'
import _ from 'lodash'

import { fruitsMatchingMyFriendsDescription } from './Interview'
import { myFriendsFruitDescription } from './myFriendsFruitDescription'
import { fruitsForSale } from './fruitConvention'


// Rendering code - you should not need to modify this 
export default function App() {
    const fruits = fruitsMatchingMyFriendsDescription(fruitsForSale, myFriendsFruitDescription)
    return (
        <main>
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Color</th>
                        <th>Price</th>
                    </tr>
                    {fruits.map(({
                        name, color, price
                    }) => <tr key={name}>
                            <th>{name}</th>
                            <td>{color}</td>
                            <td>{price}</td>
                        </tr>)}
                </tbody>
            </table>
        </main>
    )
}
