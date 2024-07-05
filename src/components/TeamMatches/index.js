// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import {MainContainer} from './style.js'
import './index.css'

const teamColors = [
  {f: '#200f38', l: '#ffed21', idd: 'KKR'},
  {f: '#fc0511', l: '#080708', idd: 'RCB'},
  {f: '#bd2028', l: '#1d1138', idd: 'KXP'},
  {f: '#fae843', l: '#0808a8', idd: 'CSK'},
  {f: '#4444db', l: '#f5dd07', idd: 'RR'},
  {f: 'blue', l: 'gold', idd: 'MI'},
  {f: 'orange', l: '#FD5825', idd: 'SH'},
  {f: '#0981eb', l: '#020d63', idd: 'DC'},
]

class TeamMatch extends Component {
  state = {iplMatches: {}, isLoading: true, recentMatchList: [], bgColor: {}}

  componentDidMount() {
    this.getMatches()
  }

  getMatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const findColor = teamColors.find(eachColor => eachColor.idd === id)

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updateData = {
      teamBannerUrl: data.team_banner_url,
      recentMatches: data.recent_matches,
      latestMatchDetails: data.latest_match_details,
    }

    const {recentMatches} = updateData
    const updateRecentMatch = recentMatches.map(eachMatch => ({
      umpires: eachMatch.umpires,
      result: eachMatch.result,
      manOfTheMatch: eachMatch.man_of_the_match,
      id: eachMatch.id,
      date: eachMatch.date,
      venue: eachMatch.venue,
      competingTeam: eachMatch.competing_team,
      competingTeamLogo: eachMatch.competing_team_logo,
      firstInnings: eachMatch.first_innings,
      secondInnings: eachMatch.second_innings,
      matchStatus: eachMatch.match_status,
    }))
    this.setState({
      iplMatches: updateData,
      isLoading: false,
      recentMatchList: updateRecentMatch,
      bgColor: findColor,
    })
  }

  isLoad = () => (
    <div testid="loader">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  isContent = () => {
    const {iplMatches, recentMatchList} = this.state
    const {teamBannerUrl, latestMatchDetails} = iplMatches
    return (
      <div>
        <img className="banner-img" alt="team banner" src={teamBannerUrl} />
        <div>
          <LatestMatch latestMatchDetails={latestMatchDetails} />
        </div>
        <ul className="ul">
          {recentMatchList.map(eachMatch => (
            <MatchCard key={eachMatch.id} eachMatch={eachMatch} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading, bgColor} = this.state
    const {f, l} = bgColor
    const r = f + ',' + l
    console.log(r)

    return (
      <MainContainer first={r}>
        {isLoading ? this.isLoad() : this.isContent()}
      </MainContainer>
    )
  }
}
export default TeamMatch
