import Nav from './Nav';
import Logo from '../assets/img/Logo.svg'

export default function Header() {
    return (  
        <header className="flex-row container">
            <img className='header-logo' src={Logo} alt='logo'></img>
            <Nav className='nav-list-container'></Nav>
        </header>
    )
}