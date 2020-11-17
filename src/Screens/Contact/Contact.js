import React from 'react';
import Logo from "../../Assets/Images/oceonlogo.png"
import Footer from "../../components/Footer2/Footer2"
import "./styles.scss"

const Contact = () => {
	return (
	<div className="main">
		<div className="contactArea">
			<div className="bio">
				<div className="bio_image">
					<img className="profile-img" src={Logo} />

				</div>
				<p>By getting benefit of experiences since 2007, Ocean biscuits got established in Turkey’s Istanbul in 2018. Its further step is to open up to the world market with its unique taste..</p>
				<a className="bio-link" href="https://twitter.com/alexboffey">
					Twitter<i class="fab fa-twitter"/>
					</a>
					<a className="bio-link" href="https://github.com/alexboffey">
						Instagram<i class="fab fa-instagram"/>

					</a>
				<a
					className="bio-link" href="https://codepen.io/alexboffey/">
						Linkedin<i class="fab fa-linkedin-in"/>
						</a>
			</div>
			<div className="contact">
				<form id="form">
					<legend className="header">Get In Touch</legend>
					<fieldset><label className="fa fa-user" for="name-input" aria-hidden="true"></label><input type="text" placeholder="Your name..." id="name-input" /></fieldset>
					<fieldset><label className="fa fa-envelope" for="email-input" aria-hidden="true"></label><input type="email" placeholder="Your email..." id="email-input" /></fieldset>
					<fieldset><label className="fa fa-comment" for="message-input" aria-hidden="true"></label><textarea placeholder="Your Message..." id="message-input"></textarea></fieldset>
					<fieldset><button type="submit" id="btn-submit">Send</button></fieldset>
				</form>
			</div>
		</div>
		<Footer/>
	</div>
	);
};

export default Contact;