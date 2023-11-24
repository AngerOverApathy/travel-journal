import worldIcon from '../../assets/img/worldIcon.png'

export default function Header() {
    return (
        <header className='banner'>
            <img className='icon' src={worldIcon} alt="world icon" />
            <span>The Wanderer</span>
        </header>
    )
    }