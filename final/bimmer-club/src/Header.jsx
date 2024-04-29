import GlobalNav from './components/GlobalNav'
import './css/Header.css'

function Header({ setPage }) {

    return (
        <header className="header">
            <a className='header__logo' href='/'>
                <img 
                    src="pics/BMW_Logo1.jpg"
                    alt = "BMW Logo"
                    className="logo__img"
                    width={75}
                    height={75}
                />
            </a>
            <div className="header__title">
                <a className="skip_to_main" href="#main">SKIP TO MAIN</a>
                <h1 className="headerTitleText">Bimmer Club</h1>
            </div>
            <GlobalNav className="header__nav" setPage={setPage} />
        </header>
    )
}

export default Header