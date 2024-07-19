import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	const [result, setResult] = React.useState("");

	const onSubmit = async (event) => {
	  event.preventDefault();
	  setResult("Sending....");
	  const formData = new FormData(event.target);
  
	  formData.append("access_key", "1835b358-68e2-494f-a0e7-dc94b051d466");
  
	  const response = await fetch("https://api.web3forms.com/submit", {
		method: "POST",
		body: formData
	  });
  
	  const data = await response.json();
  
	  if (data.success) {
		setResult("Form Submitted Successfully");
		event.target.reset();
	  } else {
		console.log("Error", data);
		setResult(data.message);
	  }
	};

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta name="keywords" content={currentSEO.keywords.join(", ")} />
			</Helmet>

			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-logo-container">
						<div className="contact-logo">
							<Logo width={46} />
						</div>
					</div>
					<div className="contact-heading">
						<h1>Let's Get in Touch</h1>
						<p>
							I'm always excited to connect with new people! Whether you have a question, want to discuss a project, or just want to say hi, feel free to drop me a message. Let's create something amazing together!
						</p>
					</div>
					<div className="contact-content">
						<div className="contact-form-container">
							<form onSubmit={onSubmit}>
								<div className="form-row">
									<input type="text" name="name" placeholder="Your Name" required />
									<input type="email" name="email" placeholder="Your Email" required />
								</div>
								<textarea name="message" placeholder="Your Message" required></textarea>
								<button type="submit">Let's Connect</button>
								<p className="form-result">{result}</p>
							</form>
						</div>
						<div className="socials-container">
							<Socials />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Contact;
