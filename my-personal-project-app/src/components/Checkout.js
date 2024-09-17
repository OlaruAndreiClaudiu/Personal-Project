import React, {
	useState,
	useEffect,
} from "react";
import "../style/Checkout.css";
import Buy from "../components/Buy";
import { GiShoppingBag } from "react-icons/gi";

function Checkout({
	visibilty,
    products,
	onClose,
}) {
	const [cartsVisibilty, setCartVisible] =
	useState(false);
	const [productsInCart, setProducts] =
	useState(
		JSON.parse(
			localStorage.getItem(
				"shopping-cart"
			)
		) || []
	);
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

				<div className="btn bag-btn">
					<GiShoppingBag size={100} />
					{productsInCart.length > 0 && (
							<span className="checkout-count">
								{
								productsInCart.length
								}
								</span>)
								}
								{productsInCart.map((product) => (
					<h3>Total :{(product.price*product.count)}</h3>
				))}
		
				</div>
		

				<div className="cart-products">
					{productsInCart.length === 0 && (
						<span className="empty-text">
							Your basket is
							currently empty
						</span>
					)}
					{productsInCart.map((product) => (
						<div
							className="cart-product"
							key={product.id}>
							<div className="product-info">
								<div className="product-price">
								</div>
							</div>
						</div>
					))}
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