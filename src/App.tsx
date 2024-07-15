import Product from "./components/Layout/product";
import Header from "./components/Layout/header";
import HeroBanner from "./components/Layout/hero-banner";

const App = () => {
	return (
		<>
			<Header />
			<main className="min-h-[calc(100vh_-_100px)]">
				<HeroBanner />
				<Product />
			</main>
		</>
	);
};

export default App;
