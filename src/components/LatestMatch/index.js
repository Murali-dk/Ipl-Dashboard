// Write your code here
import './index.css'

const LatestMatch = props => {
  const getCamelCase = latestMatchDetails => {
    const updateLatestMatch = {
      umpires: latestMatchDetails.umpires,
      result: latestMatchDetails.result,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      id: latestMatchDetails.id,
      date: latestMatchDetails.date,
      venue: latestMatchDetails.venue,
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      firstInnings: latestMatchDetails.first_innings,
      secondInnings: latestMatchDetails.second_innings,
      matchStatus: latestMatchDetails.match_status,
    }
    return updateLatestMatch
  }

  const {latestMatchDetails} = props
  const updateLatestMatch = getCamelCase(latestMatchDetails)
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = updateLatestMatch

  return (
    <div>
      <h1>Latest Matches</h1>
      <p>{competingTeam}</p>
      <p>{date}</p>
      <p>{venue}</p>
      <p>{result}</p>
      <img
        className="img"
        alt={`latest match ${competingTeam}`}
        src={competingTeamLogo}
      />
      <h1>first Innings</h1>
      <p>{firstInnings}</p>
      <h1>second Innings</h1>
      <p>{secondInnings}</p>
      <h1>Man of The Match</h1>
      <p>{manOfTheMatch}</p>
      <h1>Umpires</h1>
      <p>{umpires}</p>
    </div>
  )
}

export default LatestMatch
