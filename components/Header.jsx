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
					<i className="mobile-nav-toggle d-xl-none bi bi-list" />
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
