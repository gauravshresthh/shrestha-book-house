import React from 'react';
import styles from './Pricing.module.css';

const Pricing = () => {
	return (
		<section id='pricing' className={`${styles.customBg} mt-5`}>
			<div className='container-lg'>
				<div className='text-center'>
					<h2>Pricing Plans</h2>
					<p className='lead text-muted'>Choose a pricing plan to suit you.</p>
				</div>

				<div className='row my-5 align-items-center justify-content-center g-0'>
					<div className='col-8 col-lg-4 col-xl-3'>
						<div className='card border-0'>
							<div className='card-body text-center py-4'>
								<h4 className='card-title'>Starter Edition</h4>
								<p className='lead card-subtitle'>eBook Download Only</p>
								<p className='display-6 my-4 text-primary fw-bold'>NRs.1299</p>
								<p className='card-text mx-5 text-muted d-none d-lg-block'>
									Lorem ipsum, dolor sit amet consectetur adipisicing elit.
								</p>
								<a href className='btn btn-outline-primary btn-lg mt-3'>
									Buy Now
								</a>
							</div>
						</div>
					</div>

					<div className='col-9 col-lg-4'>
						<div className='card border-primary border-2'>
							<div className='card-header text-center text-primary'>
								Most Popular
							</div>
							<div className='card-body text-center py-5'>
								<h4 className='card-title'>Complete Edition</h4>
								<p className='lead card-subtitle'>
									eBook Download and all updates
								</p>
								<p className='display-5 my-4 text-primary fw-bold'>NRs.1899</p>
								<p className='card-text mx-5 text-muted d-none d-lg-block'>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
									impedit eos soluta.
								</p>
								<a href className='btn btn-outline-primary btn-lg mt-3'>
									Buy Now
								</a>
							</div>
						</div>
					</div>

					<div className='col-8 col-lg-4 col-xl-3'>
						<div className='card border-0'>
							<div className='card-body text-center py-4'>
								<h4 className='card-title'>Ultimate Edition</h4>
								<p className='lead card-subtitle'>
									Download, Updates and Extras
								</p>
								<p className='display-6 my-4 text-primary fw-bold'>NRs.2499</p>
								<p className='card-text mx-5 text-muted d-none d-lg-block'>
									Lorem ipsum, dolor sit amet consectetur adipisicing elit.
								</p>
								<a href className='btn btn-outline-primary btn-lg mt-3'>
									Buy Now
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Pricing;
