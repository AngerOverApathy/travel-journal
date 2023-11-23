import worldIcon from '../../../public/worldIcon.png'

export default function Header() {
    return (
        <header className='banner'>
            <img className='icon' src={worldIcon} alt="world icon" />
            <span>The Wandering Dancer</span>
        </header>
    )
    }