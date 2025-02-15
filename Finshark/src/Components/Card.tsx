import {CompanySearch} from "../company"
import Portfolio from "./Portfolio/AddPortfolio"
import {SyntheticEvent} from "react"

interface Props {
  id: string,
  searchResult: CompanySearch,
  onPortfolioCreate: (e: SyntheticEvent) => void
}

interface Props {
  id: string,
  searchResult: CompanySearch,
}

const Card: React.FC<Props> = ({searchResult, onPortfolioCreate}: Props): JSX.Element => {
  return (
    <div className="card">
    <img
      src="https://images.unsplash.com/photo-1612428978260-2b9c7df20150?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
      alt="Image"
    />
    <div className="details">
      <h2>
        {searchResult.name} ({searchResult.symbol})
      </h2>
      <p>${searchResult.currency}</p>
    </div>
    <p className="info">
      {searchResult.exchangeShortName} - {searchResult.stockExchange}
    </p>
    <Portfolio onPortfolioCreate={onPortfolioCreate} symbol={searchResult.symbol}/>
  </div>
);
}

export default Card