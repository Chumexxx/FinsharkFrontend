import React from 'react'
import {SyntheticEvent} from 'react'

type Props = {
    onPortfolioCreate: (e: SyntheticEvent) => void;
    symbol: string
}

const Portfolio = ({onPortfolioCreate, symbol}: Props) => {
  return (
    <form onSubmit={onPortfolioCreate}>
        <input readOnly={true} hidden={true} value={symbol} type="text" />
        <button type='submit'>Add</button>
    </form>
  )
}

export default Portfolio