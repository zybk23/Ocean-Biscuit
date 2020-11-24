import React,{useState} from 'react';
import Logo from "../../Assets/Images/oceonlogo.png"
import Footer from "../../components/Footer2/Footer2"
import emailjs from "emailjs-com"
import "./styles.scss"

const Contact = () => {
	const [text,setText]=useState({
		name:"",
		email:"",
		message:""
	})

	const sendEmail=(e)=>{
		e.preventDefault();
		console.log("içeri girdi");
		emailjs.sendForm('service_hr09m0c','template_sbohst7',e.target,'user_e1CKF2v8DwS52WIaPzCqO')
		.then((result) => {
			console.log(result.text);
		}, (error) => {
			console.log(error.text);
		});
		e.target.reset()

	}

	return (
	<div className="main">
		<div className="contactArea">
			<div className="bio">
				<div className="bio_image">
					<img className="profile-img" src={Logo} />

				</div>
				<p>By getting benefit of experiences since 2007, Ocean biscuits got established in Turkey’s Istanbul in 2018. Its further step is to open up to the world market with its unique taste..</p>
				<a className="bio-link" target="_blank" href="https://twitter.com/biscuit_ocean?s=21">
					Twitter<i className="fab fa-twitter"/>
					</a>
					<a className="bio-link" target="_blank" href="https://instagram.com/oceanbiskuvi?igshid=1k0lv5zk3f277">
						Instagram<i className="fab fa-instagram"/>

					</a>
				<a
					className="bio-link" target="_blank" href="https://www.linkedin.com/in/muhammed-ammar-%C3%A7elenk-8061a1166/">
						Linkedin<i className="fab fa-linkedin-in"/>
						</a>
			</div>
			<div className="contact">
				<form id="form" onSubmit={sendEmail}>
					<legend className="header">Get In Touch</legend>
					<fieldset>
						<label className="fa fa-user" htmlFor="name-input" aria-hidden="true"/>
						<input name="name" value={text.name} onChange={e=>setText({...text,name:e.target.value})} type="text" placeholder="Your name..." id="name-input" />
					</fieldset>
					<fieldset>
						<label className="fa fa-envelope" htmlFor="email-input" aria-hidden="true"/>
						<input name="email" value={text.email} onChange={e=>setText({...text,email:e.target.value})} type="email" placeholder="Your email..." id="email-input" />
					</fieldset>
					<fieldset>
						<label className="fa fa-comment" htmlFor="message-input" aria-hidden="true"/>
						<textarea name="message" value={text.message} onChange={e=>setText({...text,message:e.target.value})} placeholder="Your Message..." id="message-input"/>
					</fieldset>
					<fieldset><button type="submit" id="btn-submit">Send</button></fieldset>
				</form>
			</div>
		</div>
		<Footer/>
	</div>
	);
};

export default Contact;