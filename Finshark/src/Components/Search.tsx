import React, { ChangeEvent, MouseEvent, SyntheticEvent } from 'react'
import {useState} from "react"

interface Props {
  onClick: (e: SyntheticEvent) => void
  search: string | undefined;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
} 

const Search : React.FC<Props> = ({onClick, search, handleChange}: Props) : JSX.Element => {

  return (
    <div>
        <input style={{color: "blue", width: "200px", height: "50px", backgroundColor: "red"}} placeholder='hello' value={search} onChange={(e)=> handleChange(e)} type="text" />
        <button onClick={(e) => onClick(e)}>Hii</button>
    </div>
  )
}

export default Search
 