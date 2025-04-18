import { config } from "process"
import Table from "../Components/Table/Table"
import { testIncomeStatementData } from "../Components/Table/testData"

interface Props {

}

const DesignPage = ({}: Props) => {
  return (
    <>
    <h1> Finshark Design Page</h1> 
    <h2>This is Finshark's design page. This is where we will 
        house various design aspects of our app
    </h2>
    <Table data={testIncomeStatementData} config={config}/>
    </>
  )
}

export default DesignPage