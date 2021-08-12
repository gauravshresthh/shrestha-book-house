import React from 'react';

import img from '../assets/kindle.png';

const Topics = () => {
	return (
		<section id='topics'>
			<div className='container-md'>
				<div className='text-center'>
					<h2>Inside the Book ...</h2>
					<p className='lead text-muted'>
						A quick glance at the topics you'll learn
					</p>
				</div>
				<div className='row my-5 g-5 align-items-center'>
					<div className='col-6 col-lg-4'>
						<img src={img} className='img-fluid' alt='ebook' />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Topics;
