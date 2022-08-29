import {useState, useEffect} from 'react';
import axios from 'axios';
import { Pagination } from '../pagination/Pagination';

export const ParentComponent = () => {

const [pokemons, updatePokemons] = useState([]);
const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
const [nextPageUrl, setNextPageUrl] = useState()
const [prevPageUrl, setPrevPageUrl] = useState()
const [loading, setLoading] = useState(true)

useEffect(() => {
  setLoading(true)
  let cancel
  axios.get(currentPageUrl, {
    cancelToken: new axios.CancelToken(c => cancel = c)
  }).then(res => {
    setLoading(false)
    setNextPageUrl(res.data.next)
    setPrevPageUrl(res.data.previous)
    updatePokemons(res.data.results.map(p => p.name))
  })

  return () => cancel()
}, [currentPageUrl])

const gotoNextPage = () => {
  console.log('i am in function');
  setCurrentPageUrl(nextPageUrl)
}

function gotoPrevPage() {
  setCurrentPageUrl(prevPageUrl)
}

if (loading) return "Loading..."

  return(
    <div>
    {pokemons.map((poke) => <p>{poke}</p>)}
    <Pagination
    gotoNextPage = {nextPageUrl ? gotoNextPage : null}
    gotoPrevPage = {prevPageUrl ? gotoPrevPage : null}
    />
    </div>
  )
};
