import React from "react";

function article_1() {
	return {
		date: "20 November 2023",
		title: "Data Science for Beginners",
		description:
			"A Comprehensive Guide to Programming, Data Analysis, and Machine Learning.",
		keywords: [
			"The Benefits of Cloud Computing",
			"Kush",
			"Kush S",
			"Kush Patel",
		],
		
		body: (
			<React.Fragment>
				<div className="article-content">
					
					<a href="https://medium.com/@patelkush.work/data-science-for-beginners-a-comprehensive-guide-to-programming-data-analysis-and-machine-750be37f383d">Click here to read full article</a>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "7 May 2023",
		title: "Artificial Intelligence in Healthcare",
		description:
			"AI is transforming the healthcare industry, from improving patient outcomes to streamlining operations. Discover the latest applications of this game-changing technology.",
		style: ``,
		keywords: [
			"Artificial Intelligence in Healthcare",
			"Kush",
			"Kush S",
			"Kush Patel",
		],
		body: (
			<React.Fragment>
				<div className="article-content">
					
					<a href="https://medium.com/@patelkush.work/artificial-intelligence-in-healthcare-743ffd6b13a0">Click here to read full article</a>
				</div>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
