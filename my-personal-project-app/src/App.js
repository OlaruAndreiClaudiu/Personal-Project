
import React, {
	useState,
	useEffect,
} from "react";
import "./style/main.css";
import { GiShoppingBag } from "react-icons/gi";
import RatingStars from "./components/RatingStars";
import ShoppingCart from "./components/ShoppingCart";

const fitness = [
	{
		id: 1,
		name: "Product",
		rating: 4.3,
		description:
			"Description.",
		price: 199,
		image: require("./assets/img/fitness.png"),
	},
	{
		id: 2,
		name: "Product",
		rating: 4.2,
		description:
			"Description.",
		price: 229,
		image: require("./assets/img/fitness.png"),
	},
	{
		id: 3,
		name: "Product",
		rating: 3.2,
		description:
			"Description.",
		price: 99,
		image: require("./assets/img/fitness.png"),
	},
	{
		id: 4,
		name: "Product",
		rating: 4.8,
		description:
			"Description.",
		price: 119,
		image: require("./assets/img/fitness.png"),
	},
];

const constructions = [
	{
		id: 1,
		name: "Product",
		rating: 4.3,
		description:
			"Description.",
		price: 199,
		image: require("./assets/img/constructions.png"),
	},
	{
		id: 2,
		name: "Product",
		rating: 4.2,
		description:
			"Description.",
		price: 229,
		image: require("./assets/img/constructions.png"),
	},
	{
		id: 3,
		name: "Product",
		rating: 3.2,
		description:
			"Description.",
		price: 99,
		image: require("./assets/img/constructions.png"),
	},
	{
		id: 4,
		name: "Product",
		rating: 4.8,
		description:
			"Description.",
		price: 119,
		image: require("./assets/img/constructions.png"),
	},
];

function App() {
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
	useEffect(() => {
		localStorage.setItem(
			"shopping-cart",
			JSON.stringify(productsInCart)
		);
	}, [productsInCart]);
	const addProductToCart = (product) => {
		const newProduct = {
			...product,
			count: 1,
		};
		setProducts([
			...productsInCart,
			newProduct,
		]);
	};

	const onQuantityChange = (
		productId,
		count
	) => {
		setProducts((oldState) => {
			const productsIndex =
				oldState.findIndex(
					(item) =>
						item.id === productId
				);
			if (productsIndex !== -1) {
				oldState[productsIndex].count =
					count;
			}
			return [...oldState];
		});
	};

	const onProductRemove = (product) => {
		setProducts((oldState) => {
			const productsIndex =
				oldState.findIndex(
					(item) =>
						item.id === product.id
				);
			if (productsIndex !== -1) {
				oldState.splice(productsIndex, 1);
			}
			return [...oldState];
		});
	};

	return (
		<div className="App">
			<ShoppingCart
				visibilty={cartsVisibilty}
				products={productsInCart}
				onClose={() =>
					setCartVisible(false)
				}
				onQuantityChange={
					onQuantityChange
				}
				onProductRemove={onProductRemove}
			/>
			<div className="navbar">
				<h3 className="logo">Logo</h3>
				<button
					className="btn shopping-cart-btn"
					onClick={() =>
						setCartVisible(true)
					}>
					<GiShoppingBag size={24} />
					{productsInCart.length >
						0 && (
						<span className="product-count">
							{
								productsInCart.length
							}
						</span>
					)}
				</button>
			</div>
			<main>
				<h2 className="title">
					Fitness
				</h2>
				<div className="products">
					{fitness.map((product) => (
						<div
							className="product"
							key={product.id}>
							<img
								className="product-image"
								src={
									product.image
								}
								alt={
									product.image
								}
							/>
							<h4 className="product-name">
								{product.name}
							</h4>
							<RatingStars
								rating={
									product.rating
								}
							/>
							<p>
								{
									product.description
								}
							</p>
							<span className="product-price">
								{product.price}$
							</span>
							<div className="buttons">
								<button className="btn">
									Details
								</button>
								<button
									className="btn"
									onClick={() =>
										addProductToCart(product)
									}>
									Add to cart
								</button>
							</div>
						</div>
					))}
				</div>
        <h2 className="title">
					Constructions
				</h2>
				<div className="products">
					{constructions.map((product) => (
						<div
							className="product"
							key={product.id}>
							<img
								className="product-image"
								src={
									product.image
								}
								alt={
									product.image
								}
							/>
							<h4 className="product-name">
								{product.name}
							</h4>
							<RatingStars
								rating={
									product.rating
								}
							/>
							<p>
								{
									product.description
								}
							</p>
							<span className="product-price">
								{product.price}$
							</span>
							<div className="buttons">
								<button className="btn">
									Details
								</button>
								<button
									className="btn"
									onClick={() =>
										addProductToCart(product)
									}>
									Add to cart
								</button>
							</div>
						</div>
					))}
				</div>
			</main>
		</div>
	);
}

export default App;
