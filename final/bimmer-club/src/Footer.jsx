import "./css/Footer.css";
import footerMenu from "./components/footerMenu";

function Footer({ setPage }) {

    const ListHtml = footerMenu.map( item => {
        return (
                <a 
                key={item.name}
                className="footer_link" 
                href={item.path}
                onClick = { (e) => {
                    e.preventDefault();
                    setPage(e.target.pathname);
                }}
                >
                    {item.name}
                </a>
        );
    });

    return (
        <footer className="footer">
            <div className="footer_links">
                {ListHtml}
            </div>
        </footer>
    )
}

export default Footer