import React from 'react';
import "./styles.scss"
import Photo from "../../Assets/Images/shoe-1.png"
import Footer from "../../components/Footer2/Footer2"


const products=[
	{
		id:1,
		img:Photo,
		price1:"150 TL",
		price2:"200 TL",
		description:"Ocean cookies classic 48Gx24x6(40HC2850)",
		discount:"New"
	},
	{
		id:2,
		img:require("../../Assets/Images/2.jpg"),
		price1:"150 Tl",
		price2:"200 Tl",
		description:"Ocean cookies mosaic 48Gx24x6(40HC2850)",
	},
	{
		id:3,
		img:require("../../Assets/Images/3.jpg"),
		price1:"150 Tl",
		price2:"200 Tl",
		description:"Ocean cookies dark 48Gx24x6(40HC2850)",
		discount:"New"
	},
	{
		id:4,
		img:require("../../Assets/Images/4.jpg"),
		price1:"150 Tl",
		price2:"200 Tl",
		description:"Oceanbis wafer with cacao cream 48Gx24x6(40HC2850)",
	},
	{
		id:5,
		img:require("../../Assets/Images/5.jpg"),
		price1:"150 Tl",
		price2:"200 Tl",
		description:"Oceanbis wafer with cacao cream 48Gx24x6(40HC2850)",
	},
	{
		id:6,
		img:require("../../Assets/Images/ocb1.jpg"),
		price1:"150 Tl",
		price2:"200 Tl",
		description:"Oceanbis wafer with cacao cream 48Gx24x6(40HC2850)",
		discount:"New"
	},
]

const about=[
	{
		id:2,
		smTitle:"Ocean Biscuit",
		mdTitle:"OUR QUALİTY & SENSE",
		dsc:"To produce with perfectionism principle by adapting changing economic conditions. To work with certain rules and principles in a systematic manner in order to contribute Turkish economy. To comply fully....",
		btn:"Show More..."
	},
	{
		id:3,
		smTitle:"Ocean Biscuit",
		mdTitle:"OUR MİSSİON & VİSİON",
		dsc:"To become a future company which contributes positive values to the Turkish economy while growing constantly through our respects humanity, environment and life and future. To raise the standards through...",
		btn:"Show More..."
	},
]

const NewProduct = (props) => {
	return (
		<>
		<div className="tahaNew">
				<div className= "product-collection">
				<div className= "container">
					<div className= "product-collection-wrapper">
						<div className= "product-col-left flex">
							<div className= "product-col-content">
								<button type = "button" className= "btn-dark">Shop now</button>
							</div>
						</div>
						<div className= "product-col-right">
							<div className= "product-col-r-top flex" onClick={()=>props.handleShow(1)} >
								<div className= "product-col-content">
									<h2 className= "sm-title2">Ocean Biscuit </h2>
									<h2 className= "md-title">About Us </h2>
									<p className= "text-light">By getting benefit of experiences since 2007, Ocean biscuits got established in Turkey’s Istanbul in 2018. Its further step is to open up to the world market with its unique taste. Ocean Biscuits and Confectionary Industry has recorded remarkably rapid expansion and development due to its application of modern food processing techniques in all aspects of production...</p>
									<button type = "button" className= "btn-dark">Show More...</button>
								</div>
							</div>

							<div className= "product-col-r-bottom">
								{
									about.map(item=>
									<div className= "flex" onClick={()=>props.handleShow(item.id)} key={item.id}>
									<div className= "product-col-content">
										<h2 className= "md-title">{item.mdTitle}</h2>
										<p className= "text-light">{item.dsc}</p>
										<button type = "button" className= "btn-dark">{item.btn}</button>
									</div>
								</div>)
								}
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className= "products">
				<div className= "container">
					<div className= "product-items">
						{
							products.map((item,index)=><div className= "product" key={index}>
							<div className= "product-content">
								<div className= "product-img">
									<img src = {item.img} alt = "product image"/>
								</div>
								<div className= "product-btns">
									<a href="https://instagram.com/oceanbiskuvi?igshid=1k0lv5zk3f277" target="_blank">
										<i class="fab fa-instagram"/>
									</a>	
									<a href="https://twitter.com/biscuit_ocean?s=21" target="_blank">
										<i class="fab fa-twitter"/>
									</a>
									<a href="https://www.linkedin.com/in/muhammed-ammar-%C3%A7elenk-8061a1166/" target="_blank">
										<i class="fab fa-linkedin-in"/>
									</a>
								</div>
							</div>

							<div className= "product-info">
								
							<a href = "#" className= "product-name">{item.description}</a>
		
								</div>
								{
									item.discount && <div className= "off-info">
									<h2 className= "sm-title">{item.discount}</h2>
								</div>
								}
								
							</div>)
						}
					</div>
				</div>
        	</div>

						
		</div>
		<Footer/>
		</>
		
	);
};

export default NewProduct;