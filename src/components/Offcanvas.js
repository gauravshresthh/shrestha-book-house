import React from 'react';

const Offcanvas = () => {
	return (
		<div
			className='offcanvas offcanvas-start'
			tabIndex={-1}
			id='sidebar'
			aria-labelledby='sidebar-label'>
			<div className='offcanvas-header'>
				<h5 className='offcanvas-title' id='sidebar-label'>
					My Other Books
				</h5>
				<button
					type='button'
					className='btn-close'
					data-bs-dismiss='offcanvas'
					aria-label='Close'
				/>
			</div>
			<div className='offcanvas-body'>
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. In minima
					ducimus excepturi quasi tempore fugit quis voluptatibus aut error
					possimus, tenetur natus magni quam voluptatem quae eligendi
					repudiandae delectus eaque!
				</p>
				{/* dropdown */}
				<div className='dropdown mt-3'>
					<button
						className='btn btn-primary dropdown-toggle'
						type='button'
						id='book-dropdown'
						data-bs-toggle='dropdown'>
						Choose a book title
					</button>
					<ul className='dropdown-menu' aria-labelledby='book-dropdown'>
						<li>
							<a className='dropdown-item' href>
								Become a React Superhero
							</a>
						</li>
						<li>
							<a className='dropdown-item' href>
								Conquering Vue.js
							</a>
						</li>
						<li>
							<a className='dropdown-item' href>
								Levelling up Your Next.js
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Offcanvas;
