import React from "react";
import "../style/Details.css";
import { AiFillCloseCircle } from "react-icons/ai";

function Details({
	visibilty,
	products,
	onClose,
}) {
	return (
		<div
			className="modal"
			style={{
				display: visibilty
					? "block"
					: "none",
			}}>
			<div className="details">
				<div className="header">
					<h2>Details</h2>
					<button
						className="btn close-btn"
						onClick={onClose}>
						<AiFillCloseCircle
							size={30}
						/>
					</button>
				</div>
                <div className="cart-products">
					{products.length === 0 && (
						<span className="empty-text">
							No description
						</span>
					)}
					{products.map((product) => (
						<div
							className="cart-product"
							key={product.id}>
							<div className="product-info">
								<h3>
									{product.details}
								</h3>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Details;