import Home from './components/Home'
import BMWs from './components/BMWs'
import About from './components/About'

function MainArea({page}) {
    return (
        <main>
            {(page === "/") && <Home/>}
            {(page === "/bmw") && <BMWs/>}
            {(page === "/about") && <About/>}
        </main>
    )
}

export default MainArea