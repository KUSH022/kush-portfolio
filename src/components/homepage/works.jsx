import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="https://en.m.wikipedia.org/wiki/File:Tata_Consultancy_Services_Logo.svg"
								alt="."
								className="work-image"
							/>
							<div className="work-title">Tata Consultancy services</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">2024 - Present</div>
						</div>
						<div className="work">
							<img
								src="./te.png"
								alt="."
								className="work-image"
							/>
							<div className="work-title">Techomax Solutions</div>
							<div className="work-subtitle">
								Full Stack Developer
							</div>
							<div className="work-duration">2023 - 2024</div>
						</div>

						<div className="work">
							<img
								src="./ppsu.png"
								alt="."
								className="work-image"
							/>
							<div className="work-title">P.P.Savani University</div>
							<div className="work-subtitle">
								Teaching Intern
							</div>
							<div className="work-duration">2022 - 2023</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
