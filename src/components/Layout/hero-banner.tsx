import HeroImage from "../../assets/hero-image.png";

const HeroBanner = () => {
	return (
		<main className="min-h-screen">
			<div className="relative h-[660px]">
				<div className="w-full relative h-[380px] flex flex-col">
					<span className="text-[10vw] justify-center items-center text-center absolute w-full text-pretty font-poppins special-text font-bold text-dark-blue-200/25">
						THE NEW 2023
					</span>
					<span className="text-[12vw] text-center bottom-0 absolute w-full text-pretty font-poppins linear-text font-extrabold text-dark-blue-200/25">
						AIR JORDAN
					</span>
				</div>
				<img
					className="w-[1075px] bottom-0 left-1/2 -translate-x-1/2 absolute"
					src={HeroImage}
					alt="Hero Image"
				/>
			</div>
		</main>
	);
};

export default HeroBanner;
