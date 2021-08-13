import React from 'react';

import styles from './Reviews.module.css';

const Reviews = () => {
	return (
		<section id='reviews' className={`${styles.customBg}`}>
			<div className='container-lg'>
				<div className='text-center'>
					<h2>
						<i className='bi bi-stars' />
						Book Reviews
					</h2>
					<p className='lead'>What my students have said about the book...</p>
				</div>
				<div className='row justify-content-center my-5'>
					<div className='col-lg-8'>
						<div className='list-group'>
							<div className={`${styles.customBg} list-group-item py-3`}>
								<div className='pb-2'>
									<i className='bi bi-star-fill' />
									<i className='bi bi-star-fill' />
									<i className='bi bi-star-fill' />
									<i className='bi bi-star-fill' />
									<i className='bi bi-star-fill' />
								</div>
								<h5 className='mb-1'>A must-buy for every aspiring web dev</h5>
								<p className='mb-1'>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Tenetur error veniam sit expedita est illo maiores neque quos
									nesciunt, reprehenderit autem odio commodi labore praesentium
									voluptate repellat in id quisquam.
								</p>
								<small>Review by Mario</small>
							</div>
							<div className={`${styles.customBg} list-group-item py-3`}>
								<div className='pb-2'>
									<i className='bi bi-star-fill' />
									<i className='bi bi-star-fill' />
									<i className='bi bi-star-fill' />
									<i className='bi bi-star-fill' />
									<i className='bi bi-star-fill' />
								</div>
								<h5 className='mb-1'>A must-buy for every aspiring web dev</h5>
								<p className='mb-1'>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Tenetur error veniam sit expedita est illo maiores neque quos
									nesciunt, reprehenderit autem odio commodi labore praesentium
									voluptate repellat in id quisquam.
								</p>
								<small>Review by Mario</small>
							</div>
							<div className={`${styles.customBg} list-group-item py-3`}>
								<div className='pb-2'>
									<i className='bi bi-star-fill' />
									<i className='bi bi-star-fill' />
									<i className='bi bi-star-fill' />
									<i className='bi bi-star-fill' />
									<i className='bi bi-star-half' />
								</div>
								<h5 className='mb-1'>A must-buy for every aspiring web dev</h5>
								<p className='mb-1'>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Tenetur error veniam sit expedita est illo maiores neque quos
									nesciunt, reprehenderit autem odio commodi labore praesentium
									voluptate repellat in id quisquam.
								</p>
								<small>Review by Mario</small>
							</div>
							<div className={`${styles.customBg} list-group-item py-3`}>
								<div className='pb-2'>
									<i className='bi bi-star-fill' />
									<i className='bi bi-star-fill' />
									<i className='bi bi-star-fill' />
									<i className='bi bi-star-fill' />
									<i className='bi bi-star-fill' />
								</div>
								<h5 className='mb-1'>A must-buy for every aspiring web dev</h5>
								<p className='mb-1'>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Tenetur error veniam sit expedita est illo maiores neque quos
									nesciunt, reprehenderit autem odio commodi labore praesentium
									voluptate repellat in id quisquam.
								</p>
								<small>Review by Mario</small>
							</div>
							<div className={`${styles.customBg} list-group-item py-3`}>
								<div className='pb-2'>
									<i className='bi bi-star-fill' />
									<i className='bi bi-star-fill' />
									<i className='bi bi-star-fill' />
									<i className='bi bi-star-fill' />
									<i className='bi bi-star-half' />
								</div>
								<h5 className='mb-1'>A must-buy for every aspiring web dev</h5>
								<p className='mb-1'>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Tenetur error veniam sit expedita est illo maiores neque quos
									nesciunt, reprehenderit autem odio commodi labore praesentium
									voluptate repellat in id quisquam.
								</p>
								<small>Review by Mario</small>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Reviews;
