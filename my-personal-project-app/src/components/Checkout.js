import React, {
	useState,
	useEffect,
} from "react";
import "../style/Checkout.css";
import { AiFillCloseCircle } from "react-icons/ai";
import Buy from "../components/Buy"

function Checkout({
	visibilty,
    products,
	onClose,
}) {
    const [buyVisibilty, setBuyVisible] =
	useState(false);
	const [productsInBuy, setBuy] =
	useState(
		JSON.parse(
			localStorage.getItem(
				"buy"
			)
		) || []
	);
	useEffect(() => {
	localStorage.setItem(
		"buy",
		JSON.stringify(productsInBuy)
	);
	}, [productsInBuy]);
	return (
		<div
			className="modal"
			style={{
				display: visibilty
					? "block"
					: "none",
			}}>
            <Buy
	visibilty={buyVisibilty}
	products={productsInBuy}
	onClose={() =>
		setBuyVisible(false)
	}/>
			<div className="checkout">
				<div className="header">
					<h2>Checkout</h2>
				</div>
                <button className="btn buy"
                onClick={() =>
                    setBuyVisible(true)
                }>
							Buy
				</button>
                <button className="btn cancel"
                onClick={onClose}>
							Cancel
				</button>
			</div>
		</div>
	);
}

export default Checkout;