import React from "react";
import "../style/Details.css";
import { AiFillCloseCircle } from "react-icons/ai";

function Buy({
	visibilty,
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
			<div className="buy">
				<div className="header">
					<button
						className="btn close-buy"
						onClick={onClose}>
						<AiFillCloseCircle
							size={30}
						/>
					</button>
				</div>
                <div className="buy-products">
						<div className="empty-text">
							Thank you for your purchase!
						</div>
				</div>
			</div>
		</div>
	);
}

export default Buy;