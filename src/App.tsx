import Product from "./components/Layout/product";
import Header from "./components/Layout/header";
import HeroBanner from "./components/Layout/hero-banner";
import Featured from "./components/Layout/featured";

const App = () => {
	return (
		<>
			<Header />
			<main className="min-h-[calc(100vh_-_100px)]">
				<HeroBanner />
				<Product />
				<Featured />
			</main>
		</>
	);
};

export default App;
