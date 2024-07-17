import Product from "./components/Sections/product";
import Header from "./components/Layout/header";
import HeroBanner from "./components/Layout/hero-banner";
import Featured from "./components/Sections/featured";
import Popular from "./components/Sections/popular";
import Promo from "./components/Sections/promo";

const App = () => {
	return (
		<>
			<Header />
			<main className="min-h-[calc(100vh_-_100px)]">
				<HeroBanner />
				<Product />
				<Featured />
				<Popular />
				<Promo />
			</main>
		</>
	);
};

export default App;
