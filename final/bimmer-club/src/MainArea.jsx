import Home from './components/Home'
import BMWs from './components/BMWs'
import About from './components/About'
import Support from './components/Support'
import Explore from './components/Explore'
import Privacy from './components/Privacy'

function MainArea({page}) {
    return (
        <main>
            {(page === "/") && <Home/>}
            {(page === "/bmw") && <BMWs/>}
            {(page === "/about") && <About/>}
            {(page === "/support") && <Support/>}
            {(page === "/explore") && <Explore/>}
            {(page === "/privacy") && <Privacy/>}
        </main>
    )
}

export default MainArea