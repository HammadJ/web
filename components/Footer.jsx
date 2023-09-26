import React from 'react'
import Link from 'next/link'

const Footer = () => {
	return (
		<footer id="footer" className="footer">
			<div className="container footer-top">
				<div className="row gy-4">
					<div className="col-lg-5 col-md-12 footer-about">
						<Link href="index.html" className="logo d-flex align-items-center">
							<span>Interio Arch</span>
						</Link>
						<p>
							Where Dreams becomes Reality
						</p>
					</div>
					<div className="col-lg-2 col-6 footer-links">
						<h4>Useful Links</h4>
						<ul>
							<li>
								<Link href="#">Home</Link>
							</li>
							<li>
								<Link href="#">About us</Link>
							</li>
							<li>
								<Link href="#">Services</Link>
							</li>
						</ul>
					</div>
					<div className="col-lg-2 col-6 footer-links">
						<h4>Our Services</h4>
						<ul>
							<li>
								INTERIOR DESIGNING
							</li>
							<li>
								ARCHITECTURAL DESIGNING
							</li>
							<li>
								CONSTRUCTION FITOUTS
							</li>
							<li>
								FURNITURE MAKING
							</li>

						</ul>
					</div>
					<div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
						<h4>Contact Us</h4>
						<p>Phase 8, DHA</p>
						<p>Lahore</p>
						<p className="mt-4">
							<strong>Phone:</strong> <span>+92 334 7833977</span>
						</p>
						<p>
							<strong>‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎  </strong> <span>+92 323 4821848</span>
						</p>
						<p>
							<strong>Email:</strong> <span>interioArch0@gmail.com</span>
						</p>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer