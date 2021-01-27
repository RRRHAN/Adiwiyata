import React, { Component } from "react"

export class galeri extends Component {
	constructor() {
		super()
		this.state = {
			image: [
				"annie-spratt-VviNSpJuGj0-unsplash",
				"bence-balla-schottner-K2DEP6VRB4Q-unsplash",
				"fiona-smallwood-rA2t29hZj1s-unsplash",
				"gavin-mcgruddy-p23YJJMT16s-unsplash",
				"haydn-golden-blJsdcNj9Vc-unsplash",
				"ignacio-correia-1_yycyoMT6g-unsplash",
				"jade-seok-UGMGdEeifvA-unsplash",
				"kilyan-sockalingum-FXmn2BZn2A4-unsplash",
				"michael-olsen-CBrjgZ53NOs-unsplash",
				"mio-ito-DaGIjXNl5oA-unsplash",
				"mitchell-gaiser-IkiaJW5sA9k-unsplash",
				"victor-malyushev-w_N-XCjiM0o-unsplash",
			],
		}
	}
	loop = (a) => {
		a++
		let array = []
		for (let i = 1; i < a; i++) {
			array.push(i)
		}
		return array
	}
	render() {
		console.log(this.state.image)
		return (
			<div className='container'>
				{this.loop(4).map((i) => (
					<div className='row'>
						{this.loop(3).map((item) => (
							<div className='col mb-5'>
								<img
									src={
										process.env.PUBLIC_URL +
										"/image/" +
										this.state.image[item + (i - 1) * 3 - 1] +
										".jpg"
									}
									style={{
										height: "100%",
										width: "100%",
										objectFit: "cover",
									}}
									alt=''
								/>
							</div>
						))}
					</div>
				))}
			</div>
		)
	}
}

export default galeri
