import { ChangeEvent, SyntheticEvent, useState } from "react";
import { CompanySearch } from "../company";
import { searchCompanies } from "../api";
import Search from "../Components/Search";
import ListPortfolio from "../Components/Portfolio/ListPortfolio";
import CardList from "../Components/CardList";

interface Props {

}

const SearchPage = ({}: Props) => {
    const [search, setSearch] = useState<string>("");
    const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
    const [portfolioValues, setPortfolioValues] = useState<string[]>([]);
    const [serverError, setServerError] = useState<string | null>(null);
  
    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        console.log(e)
    }
  
    const onPortfolioCreate = (e: any) => {
      e.preventDefault()
      const exists = portfolioValues.find( (value) => value === e.target[0].value)
      if (exists) return;
      const updatedPortfolio = [...portfolioValues, e.target[0].value]
      setPortfolioValues(updatedPortfolio)
    }
  
    const onPortfolioDelete = (e: any) => {
      e.preventDefault();
      const removed = portfolioValues.filter((value) => {
        return value !== e.target[0].value;
      });
      setPortfolioValues(removed)
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
    <div>
      {/* <Hero/> */}
      <Search onSearchSubmit={onSearchSubmit} search={search} handleSearchChange={handleSearchChange}/>
      {serverError && <h1>{serverError}</h1>}
      <ListPortfolio portfolioValues={portfolioValues} onPortfolioDelete={onPortfolioDelete}/>
      <CardList searchResults={searchResult} onPortfolioCreate={onPortfolioCreate}/>
    </div>
  )
}

export default SearchPage