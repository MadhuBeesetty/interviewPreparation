import { useState, useMemo } from "react";
import {searchString} from './utils';

const SearchBox = () => {
const [searchIteam, updateSearchIteam] = useState('');
console.log(searchIteam, 'this is searchIteam');
const memoizedResult = useMemo(() =>{
   return searchString(searchIteam)}, [searchIteam]);

console.log(memoizedResult);

  return(<>
  <input placeholder="search..." onChange={(e) => updateSearchIteam(e.target.value) } />
    <p>{searchIteam}</p>
     {memoizedResult.length > 0 && memoizedResult.map(e => <><p>{e}</p></>)}
  </>)
}

export default SearchBox;
