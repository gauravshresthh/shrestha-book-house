import React from 'react';

import img from '../assets/kindle.png';

const Topics = () => {
	return (
		<section id='topics'>
			<div className='container-md'>
				<div className='text-center'>
					<h2 className='display-5'>Inside the Book ...</h2>
					<p className='lead text-muted'>
						A quick glance at the topics you'll learn
					</p>
				</div>
				<div className='row my-5 g-5 align-items-center'>
					<div className='col-6 col-lg-4'>
						<img src={img} className='img-fluid' alt='ebook' />
					</div>
					<div className='col-lg-6'>
						<div className='accordion' id='chapters'>
							<div className='accordion-item'>
								<h2 className='accordion-header' id='heading-1'>
									<button
										className='accordion-button'
										type='button'
										data-bs-toggle='collapse'
										data-bs-target='#chapter-1'
										aria-expanded='true'
										aria-controls='chapter-1'>
										Chapter 1 - Your first Web Application
									</button>
								</h2>

								<div
									id='chapter-1'
									class='accordion-collapse collapse show'
									aria-labelledby='heading-1'
									data-bs-parent='#chapters'>
									<div class='accordion-body'>
										First, create a file whose extension is .js e.g., app.js and
										place it in the js subfolder. Note that placing the
										JavaScript file in the js folder is not required however it
										is a good practice. Then, use the URL to the JavasScript
										source code file in the src attribute of the "script" tag
										element.
									</div>
								</div>
							</div>

							<div class='accordion-item'>
								<h2 class='accordion-header' id='headingTwo'>
									<button
										class='accordion-button collapsed'
										type='button'
										data-bs-toggle='collapse'
										data-bs-target='#collapseTwo'
										aria-expanded='false'
										aria-controls='collapseTwo'>
										Chatper 2 - The Power of Javascript
									</button>
								</h2>
								<div
									id='collapseTwo'
									class='accordion-collapse collapse'
									aria-labelledby='headingTwo'
									data-bs-parent='#accordionExample'>
									<div class='accordion-body'>
										JavaScript is the world's most popular programming language.
										JavaScript is the programming language of the Web.
										JavaScript is easy to learn.
										<br />
										<span className='fw-bold'> Why Study JavaScript ? </span>
										JavaScript is one of the 3 languages all web developers must
										learn: 1. HTML to define the content of web pages 2. CSS to
										specify the layout of web pages 3. JavaScript to program the
										behavior of web pages
									</div>
								</div>
							</div>
							<div class='accordion-item'>
								<h2 class='accordion-header' id='headingThree'>
									<button
										class='accordion-button collapsed'
										type='button'
										data-bs-toggle='collapse'
										data-bs-target='#collapseThree'
										aria-expanded='false'
										aria-controls='collapseThree'>
										Chapter 3 - Building web apps using React and Node JS
									</button>
								</h2>
								<div
									id='collapseThree'
									class='accordion-collapse collapse'
									aria-labelledby='headingThree'
									data-bs-parent='#accordionExample'>
									<div class='accordion-body lead'>
										<span className='lead'>
											React is a free and open-source front-end JavaScript
											library for building user interfaces or UI components. It
											is maintained by Facebook and a community of individual
											developers and companies. React can be used as a base in
											the development of single-page or mobile applications.
										</span>
										<br />
										<br />
										Node.js is an open-source, cross-platform, back-end
										JavaScript runtime environment that runs on the V8 engine
										and executes JavaScript code outside a web browser.
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Topics;
