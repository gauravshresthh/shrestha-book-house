import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
	return (
		<nav className={`${styles.customNav} navbar navbar-expand-md navbar-light`}>
			<div className='container-xxl'>
				<a href='#intro' className='navbar-brand'>
					<span className='fw-bold text-secondary'>
						Shrestha Code House - The Book
					</span>
				</a>
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#main-nav'
					aria-controls='navbarNav'
					aria-expanded='false'
					aria-label='Toggle navigation'>
					<span className='navbar-toggler-icon'></span>
				</button>

				<div
					className='collapse navbar-collapse justify-content-end align-center'
					id='main-nav'>
					<ul className='navbar-nav'>
						<li className='nav-item'>
							<a href='#topics' className='nav-link'>
								About the Book
							</a>
						</li>
						<li className='nav-item'>
							<a href='#topics' className='nav-link'>
								Reviews
							</a>
						</li>
						<li className='nav-item'>
							<a href='#topics' className='nav-link'>
								Get in Touch
							</a>
						</li>
						<li className='nav-item d-md-none'>
							<a href='#topics' className='nav-link'>
								Pricing
							</a>
						</li>
						<li className='nav-item ms-2 d-none d-md-inline'>
							<a href='#pricing' className='btn btn-secondary'>
								Buy Now
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
