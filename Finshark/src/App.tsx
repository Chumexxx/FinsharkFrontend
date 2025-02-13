import './App.css'
import CardList from './Components/CardList'
import Search from './Components/Search'
import {useState} from "react"
import { ChangeEvent, SyntheticEvent } from 'react'
import {CompanySearch} from "./company"
import {searchCompanies} from "./api"

function App() {
  const [search, setSearch] = useState<string>("");
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string | null>(null);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
      console.log(e)
  }

  const onPortfolioCreate = (e: SyntheticEvent) => {
    e.preventDefault()
    console.log(e)
  }

  const onSearchSubmit = async (e: SyntheticEvent) => {
    e.preventDefault()
    const result = await searchCompanies(search)
    if(typeof result === "string") {
      setServerError(result);
    } else if(Array.isArray(result.data)) {
      setSearchResult(result.data)
    }
    console.log(searchResult)
  }

  return (
    <>
      <Search onSearchSubmit={onSearchSubmit} search={search} handleSearchChange={handleSearchChange}/>
      {serverError && <h1>{serverError}</h1>}
      <CardList searchResults={searchResult} onPortfolioCreate={onPortfolioCreate}/>
    </>
  )
}

export default App
