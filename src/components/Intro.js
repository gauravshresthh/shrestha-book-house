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
							Lorem ipsum dolor sit amet consectetur adipisicing elit.Totam eum,
							sed natus debitis quibusdam, soluta rem sit molestias vel nesciunt
							incidunt.Voluptatum nam maiores nisi.
						</p>
						<a href='#pricing' className='btn btn-secondary btn-lg'>
							Buy Now
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
