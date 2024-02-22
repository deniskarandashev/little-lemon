import Nav from './Nav';
import Logo from '../assets/img/Logo.svg'

export default function Header() {
    return (  
        <header>
            <img src={Logo} alt='logo'></img>
            <Nav></Nav>
        </header>
    )
}