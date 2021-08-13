import React from 'react';
import img from '../assets/ebook-cover.png';



const Intro = () => {
	return (
		<section id='intro'>
			<div className='container-lg'>
				<div className='row justify-content-center align-items-center'>
					<div className='col-md-5 text-center text-md-start'>
						<h1>
							<div className='display-2'> Black - Belt </div>
							<div className='display-5 text-muted'> Your Coding Skills </div>
						</h1>
						<p className='lead my-4 text-muted'>
							This is a bootstrap 5.0 test project created using
							create-react-app .
						</p>
						<a href='#pricing' className='btn btn-secondary btn-lg'>
							Buy Now
						</a>
						<a
							href='#sidebar'
							className='d-block mt-3 lead'
							style={{
								textDecoration: 'none',
								color: 'gray',
								fontSize: 'medium',
							}}
							data-bs-toggle='offcanvas'
							role='button'
							aria-controls='sidebar'>
							Explore my other books
						</a>
					</div>
					<div className='col-md-5 text-center d-none d-md-block'>
						<img className='img-fluid' src={img} alt='No file found' />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Intro;
