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
									Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada
									terra videa magna derita valies darta donna mare fermentum iaculis
									eu non diam phasellus.
								</p>
								<div className="social-links d-flex mt-4">
									<Link href="">
										<i className="bi bi-twitter" />
									</Link>
									<Link href="">
										<i className="bi bi-facebook" />
									</Link>
									<Link href="">
										<i className="bi bi-instagram" />
									</Link>
									<Link href="">
										<i className="bi bi-linkedin" />
									</Link>
								</div>
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
									<li>
										<Link href="#">Terms of service</Link>
									</li>
									<li>
										<Link href="#">Privacy policy</Link>
									</li>
									<li>
										<Link href="/admin/Login">Admin</Link>
									</li>
								</ul>
							</div>
							<div className="col-lg-2 col-6 footer-links">
								<h4>Our Services</h4>
								<ul>
									<li>
										<Link href="#">INTERIOR DESIGNING</Link>
									</li>
									<li>
										<Link href="#">ARCHITECTURAL DESIGNING</Link>
									</li>
									<li>
										<Link href="#">CONSTRUCTION FITOUTS</Link>
									</li>
									<li>
										<Link href="#">FURNITURE MAKING</Link>
									</li>
									
								</ul>
							</div>
							<div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
								<h4>Contact Us</h4>
								<p>Phase 8, DHA</p>
								<p>Lahore</p>
								<p className="mt-4">
									<strong>Phone:</strong> <span>+1 5589 55488 55</span>
								</p>
								<p>
									<strong>Email:</strong> <span>info@example.com</span>
								</p>
							</div>
						</div>
					</div>
					{/* <div className="container copyright text-center mt-4">
						<p>
							© <span>Copyright</span> <strong className="px-1">Append</strong>{" "}
							<span>All Rights Reserved</span>
						</p>
						<div className="credits">
							Designed by <Link href="https://bootstrapmade.com/">BootstrapMade</Link>
						</div>
					</div> */}
				</footer>
  )
}

export default Footer