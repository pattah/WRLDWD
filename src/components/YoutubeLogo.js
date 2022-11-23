import youtubeLogo from '../images/youtubeLogo.png'
import './YoutubeLogo.css';
function YoutubeLogo() {
  return (
    <div className="youtubeLogo">
      <a href='https://www.youtube.com/'>
        <img src={youtubeLogo} alt="Click to go to WRLDWD'syoutube page"></img>
      </a>
    </div>
  )
}

export default YoutubeLogo
