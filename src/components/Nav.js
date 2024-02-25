export default function Nav() {
    return (
        <nav className="container">
            <ul className="flex-row wrap nav-list">
                <li><a href="/home">Homepage</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/menu">Menu</a></li>
                <li><a href="/reservations">Reservations</a></li>
                <li><a href="/order">Order online</a></li>
                {/* <li><a href="/login">Login</a></li> */}
            </ul>
        </nav>
    )
}