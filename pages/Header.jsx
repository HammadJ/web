import React from 'react'

const Header = () => {
  return (
    <header id="header" className="header fixed-top d-flex align-items-center">
					<div className="container-fluid d-flex align-items-center justify-content-between">
						<a
							href="/"
							className="logo d-flex align-items-center me-auto me-xl-0"
						>
							{/* Uncomment the line below if you also wish to use an image logo */}
							{/* <img src="assets/img/logo.png" alt=""> */}
							<h1>Append</h1>
							<span>.</span>
						</a>
						{/* Nav Menu */}
						<nav id="navmenu" className="navmenu">
							<ul>
								<li>
									<a href="/#hero" className="active">
										Home
									</a>
								</li>
								<li>
									<a href="/#about">About</a>
								</li>
								<li>
									<a href="/#services">Services</a>
								</li>
								<li>
									<a href="/#portfolio">Portfolio</a>
								</li>
								<li>
									<a href="/#contact">Contact</a>
								</li>
							</ul>
							<i className="mobile-nav-toggle d-xl-none bi bi-list" />
						</nav>
						{/* End Nav Menu */}
						<a className="btn-getstarted" href="index.html#about">
							Get Started
						</a>
					</div>
				</header>
  )
}

export default Header