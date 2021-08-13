import React from 'react';

const LatestUpdtes = () => {
	return (
		<div>
			<div>
				<section className="bg-altlight">
					<div className="container">
						<div className="text-center">
							<h2>Stay in The Loop</h2>
							<p className="lead">Get the latest updates as they happen...</p>
						</div>
						<div className="row justify-content-center">
							<div className="col-md-8 text-center">
								<p className="text-muted my-4">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
									exercitationem voluptatibus porro, hic asperiores fuga illo
									voluptates obcaecati deleniti veritatis sunt saepe quasi
									deserunt ex ipsum. Est possimus, aspernatur, vitae eligendi
									rem odit quaerat, ipsum pariatur ratione maxime delectus fuga
									minus accusamus dolores iusto maiores accusantium cumque
									magnam placeat quia!
								</p>
								<button
									className="btn btn-primary"
									data-bs-toggle="modal"
									data-bs-target="#reg-modal">
									Register for Updates
								</button>
							</div>
						</div>
					</div>
				</section>
				{/* modal itself */}
				<div
					className="modal fade"
					id="reg-modal"
					tabIndex={-1}
					aria-labelledby="modal-title"
					aria-hidden="true">
					<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title" id="modal-title">
									Get the Latest Updates
								</h5>
								<button
									type="button"
									className="btn-close"
									data-bs-dismiss="modal"
									aria-label="Close"
								/>
							</div>
							<div className="modal-body">
								<p>
									Lorem, ipsum dolor sit amet consectetur adipisicing elit.
									Quis, exercitationem laboriosam nihil minus voluptatibus harum
									aliquam consequatur pariatur inventore dignissimos illum
									excepturi ratione ipsum sit iusto alias eligendi fugit
									laborum?
								</p>
								<label htmlFor="modal-email" className="form-label">
									Your email address:
								</label>
								<input
									type="text"
									className="form-control"
									id="modal-email"
									placeholder="e.g. mario@example.com"
								/>
							</div>
							<div className="modal-footer">
								<button type="button" className="btn btn-primary">
									Submit
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LatestUpdtes;
