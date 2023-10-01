import React from 'react';
import Link from 'next/link';

const Header = () => {
	return (
		<header id="header" className="header fixed-top d-flex align-items-center">
			<div className="container-fluid d-flex align-items-center justify-content-between">
				<Link href="/" className="logo d-flex align-items-center me-auto me-xl-0">
					<h1>INTERIO ARCH</h1>
				</Link>
				{/* Nav Menu */}
				<nav id="navmenu" className="navmenu">
					<ul>
						<li>
							<Link href="/#hero" className="active">
								Home
							</Link>
						</li>
						<li>
							<Link href="/#about">
								About
							</Link>
						</li>
						<li>
							<Link href="/#about">
								Services
							</Link>
						</li>
						<li>
							<Link href="/#portfolio">
								Portfolio
							</Link>
						</li>
						<li>
							<Link href="/#contact">
								Contact
							</Link>
						</li>
					</ul>
					<i className="mobile-nav-toggle d-xl-none bi bi-list" >
						<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
							<path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
						</svg>
					</i>
				</nav>
				{/* End Nav Menu */}
				{/* Convert this <div> tag to a <Link> */}
				<Link href="/#about" className="btn-getstarted">
					Get Started
				</Link>
			</div>
		</header>
	);
};

export default Header;
