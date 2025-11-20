import "./Navigation.css";

export default function Navigation() {
    const navItems = [
        { name: "All Recipes", href: "#recipes" },
        { name: "My Favorites", href: "#favorites" },
        { name: "New Submission", href: "#submit" },
        { name: "Cooking Tips", href: "#tips" },
        { name: "About", href: "#about" },
    ];

    return (
        <nav id="nav">
            <ul className="links">
                {navItems.map((item) => (
                    <li key={item.name}>
                        <a href={item.href}>{item.name}</a>
                    </li>
                ))}
            </ul>
            <ul className="actions vertical">
                <li><a href="#" className="button fit">Get Cooking</a></li>
            </ul>
        </nav>
    );
}