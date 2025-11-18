import "./Footer.css";

export default function Footer() {
    return (
        <footer id="footer">
            <div className="inner">
                <ul className="icons">
                    <li><a href="#" className="icon fa-brands fa-github"></a></li>
                    <li><a href="#" className="icon fa-brands fa-linkedin"></a></li>
                    <li><a href="#" className="icon fa-solid fa-envelope"></a></li>
                </ul>
                <ul className="copyright">
                    <li>&copy; <a href="https://github.com/ilieva1maya">Maya Ilieva</a></li>
                </ul>
            </div>
        </footer>
    )
}