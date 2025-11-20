import Navigation from "../navigation/Navigation";
import "./Header.css";

export default function Header() {
	return (
		<header id="header">
			<div className="inner">
				<a href="#" className="image avatar"><img src="images/happy-holidays.jpg" alt="Happy Holidays!" /></a>
				<h1><strong>M-m-m yummy, </strong><br />
					for my tummy!<br />
					<em>crafted by <a href="https://github.com/ilieva1maya">Maya</a>.</em></h1>
					<Navigation />
			</div>
		</header>
	)
}