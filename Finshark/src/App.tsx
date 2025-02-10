import './App.css'
import CardList from './Components/CardList'
import Search from './Components/Search'
import {useState} from "react"
import { ChangeEvent, MouseEvent, SyntheticEvent } from 'react'

function App() {
  const [search, setSearch] = useState<string>("")

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
      console.log(e)
  }

  const onClick = (e: SyntheticEvent) => {
    console.log(e)
  }

  return (
    <>
      <Search onClick={onClick} search={search} handleChange={handleChange}/>
      <CardList/>
    </>
  )
}

export default App
