import PortfolioCard from "./PortfolioCard";

interface Props {
    portfolioValues: string[];
}

const ListPortfolio = ( {portfolioValues}: Props) => {
  return (
    <>
        <h3>My Portfolio</h3>
        <ul>
            {portfolioValues &&
                portfolioValues.map((portfolioValue) => {
                    return <PortfolioCard portfolioValue={portfolioValue}/>
                })}
        </ul>
    </>
  )
}

export default ListPortfolio