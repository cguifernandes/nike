import PromoImage from "../../assets/promo.png";

const Promo = () => {
	return (
		<section className="flex p-20 items-start justify-between">
			<div className="flex flex-col gap-y-5 max-w-[472px] w-full">
				<h1 className="text-[56px] font-bold font-poppins leading-[72px]">
					Rewarding Days Ahead
				</h1>
				<span className="text-gray-200 tracking-[0.02em] font-poppins font-normal text-lg">
					More rewards for Members as we celebrate the Nike App Anniversary.
				</span>
				<span className="text-gray-200 tracking-[0.02em] font-poppins font-normal text-lg">
					From 02 - 07 Aug, stand a chance to score a pair of Nike Air Max “all
					type” when you shop on the Nike App.
				</span>
				<span className="text-gray-200 tracking-[0.02em] font-poppins font-normal text-lg">
					Not a Nike Member?
				</span>
				<button
					type="button"
					className="bg-black w-[152px] h-14 flex items-center justify-center text-white text-lg font-light font-poppins rounded-[4px]"
				>
					Join now
				</button>
			</div>
			<img
				src={PromoImage}
				className="h-[574px] w-[546px] rounded-lg"
				alt="Promo image"
			/>
		</section>
	);
};

export default Promo;
