interface Props {
    portfolioValue: string;
}

const PortfolioCard = ( {portfolioValue}: Props) => {
  return (
    <>
    <h4>{portfolioValue}</h4>
    <button>x</button>
    </>
  )
}

export default PortfolioCard