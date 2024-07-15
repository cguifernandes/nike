import Carousel from "./components/Layout/carousel";
import Header from "./components/Layout/header";
import HeroBanner from "./components/Layout/hero-banner";

const App = () => {
	return (
		<>
			<Header />
			<main className="min-h-[calc(100vh_-_100px)]">
				<HeroBanner />
				<Carousel />
			</main>
		</>
	);
};

export default App;
