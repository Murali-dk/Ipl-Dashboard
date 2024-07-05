// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {iplTeam} = props
  const {name, teamImageUrl, id} = iplTeam

  return (
    <li className="card">
      <Link className="card1" to={`/team-matches/${id}`}>
        <img className="card-img" alt={name} src={teamImageUrl} />
        <p className="team-name">{name}</p>
      </Link>
    </li>
  )
}

export default TeamCard
