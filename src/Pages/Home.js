import React from 'react';
import tontachiLogo from '../Images/tontachiLogo.png';
import handphone from '../Images/handphone.png';
import discorbButton from '../Images/discord.png';
import twitterButton from '../Images/tweet.png';
import networkButton from '../Images/Network.png';
import barback from '../Images/Playbar.png';
import barback1 from '../Images/Htpbar.png';
import '../App.css';
import Navbar from '../Components/Navbar';
import '../Components/Navbar.css';

import { Button, Label } from 'reactstrap';

const Home = () => {
	return (
		<div className="background">
			<div className="container-fluid">
				<div className="row">
					<div className="col">
						<img className="tontachiLogo" src={tontachiLogo} id="tontachiLogo" alt="tontachiLogo" width="256" top="20" left="43" />
					</div>
					<Navbar />
				</div>
				<div className="container">
					<div className="row">
						<div className="col d-flex justify-content ">
							<img className="barback" src={barback1} alt="barback1" class=" mr-auto" width="241px" />
							{/* <img className="handphone" src={handphone} id="handphone" alt="handphone" class="center" position="center" bottom="0" width="400" /> */}
							<img className="barback ml-auto" src={barback} alt="barback" class=" ml-auto" width="241vh" />
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col d-flex justify-content pb-5">
						<div className="row m-4">
							<a href="https://discord.gg/QYH8sqTmRw" target="_blank">
								<img className="socialMediaLink" src={networkButton} id="networkButton" alt="networkButton" />
							</a>
						</div>
						<div className="row m-4">
							<a href="https://discord.gg/QYH8sqTmRw" target="_blank">
								<img className="socialMediaLink" src={discorbButton} id="discorbButton" alt="discorbButton" />
							</a>
						</div>
						<div className="row m-4">
							<a href="https://twitter.com/tontachiAR" target="_blank">
								<img className="socialMediaLink" src={twitterButton} id="twitterButton" alt="twitterButton" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
