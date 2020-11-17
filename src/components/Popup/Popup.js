import React from 'react';
import "./styles.scss"


const Popup = (props) => {
	return (
	<div className="popup">
		<div className="overlay"></div>
		<div className="content">
			<div className="closeBtn" onClick={()=>props.handleClose()}>&times;</div>
			<div className="textArea">
				{
					props.status == 1 &&
					<div className="textAreaItem">
						<h1 >About Us</h1>
						<p>By getting benefit of experiences since 2007, Ocean biscuits got established in Turkey’s Istanbul in 2018. Its further step is to open up to the world market with its unique taste. 
						Ocean Biscuits and Confectionary Industry has recorded remarkably rapid expansion and development due to its application of modern food processing techniques in all aspects of production.
						<br/><br/>
						As a result it has always been a leading name in the Turkish biscuit and Confectionary sector. Ocean has always manufactured top quality products that in no way compromise human health, hygiene or the environment. 
						In addition to biscuits, cake and confectionary lines, ocean has always manufactured top quality products that in no way compromise human health, hygiene or the environment. 
						As a result the company is able to manufacture a substantial amount of the raw materials it uses for biscuits and confectioneries.
						</p>
					</div>
					
				}
				{
					props.status == 2 && 

					<div className="textAreaItem">
						<h1>OUR QUALİTY & SENSE</h1>
						<p>To produce with perfectionism principle by adapting changing economic conditions. To work with certain rules and principles in a systematic manner in order to contribute Turkish economy. To comply fully with legal requirements. To keep improving our quality and safety standarts.
						<br/><br/>
						As a company, our sense of quality constitutes of adopting a systematic, planned and orderly working organization, fully abiding by the official requirements and enhancing the quality and security day after day with the aim of a full adaptation to the changing global conditions, manufacturing according to principles of excellence and performing activities which add values to the Turkish economy.
						</p>
					</div>
					
					
				}
				{
					props.status ==3 && 
					<div className="textAreaItem">
						<h1>OUR MİSSİON & VİSİON</h1>
						<p>
							To become a future company which contributes positive values to the Turkish economy while growing constantly through our respects humanity, environment and life and future. To raise the standards through the use of advanced technologies, merge quality with excellence, and continue walking with enthusiasm and belief in the path of global fame to become the leading made-in-Turkey taste.
						</p>
					</div>
				}
				<div className="rectangle "  onClick={()=>props.handleClose()}>
					<p className="btn"> See Products</p>
				</div>
			</div>
		</div>
	</div>
	);
};

export default Popup;