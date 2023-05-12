import StatisticsLine from "./StatisticLine"

const Statistics = ({good, neutral, bad, all}) => {
  return (
    <div>
      <table>
        <tbody>
          <StatisticsLine text = "good" value = {good} />
          <StatisticsLine text = "neutral" value = {neutral} />
          <StatisticsLine text = "bad" value = {bad} />
          <StatisticsLine text = "all" value = {all} />
          <StatisticsLine text = "average" value = {all !== 0 ? (bad * (-1) + good * 1) / all : 0} />
          <StatisticsLine text = "positive" value = {all !== 0 ? good / all : 0} />
        </tbody>       
      </table> 
    </div>
  )
}

export default Statistics