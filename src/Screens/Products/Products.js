import React from 'react';
import Product from "../../components/Product/Product"
import Popup from "../../components/Popup/Popup"

class Products extends React.Component{
	state={
		status:2,
		isShow:false
	}
	handleShow=(id)=>{
		console.log("gelen id",id);
		this.setState({
			status:id,
			isShow:true
		})
	}
	handleClose=()=>{
		this.setState({
			isShow:false
		})
	}
	render(){
		const {isShow,status} =this.state
		return (
			<>
				<Product handleShow={this.handleShow}/>
				{
					isShow && <Popup handleClose={this.handleClose} status={status} />
				}
				
			</>
		);
	}
	
};

export default Products;