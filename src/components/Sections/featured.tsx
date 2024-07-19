import FeaturedImage from "../../assets/featured.png";
import ArrowIcon from "../../assets/icons/ArrowIcon";
import { motion } from "framer-motion";

const Featured = () => {
	return (
		<section className="flex flex-col">
			<motion.div
				initial={{ translateY: -40, opacity: 0 }}
				whileInView={{ translateY: 0, opacity: 1 }}
				transition={{ type: "keyframes" }}
				className="flex flex-col gap-y-5 items-center"
			>
				<h1 className="text-[56px] font-bold font-poppins">Featured</h1>
				<span className="text-gray-200 text-lg font-normal font-poppins">
					There are newest style of the season.
				</span>
			</motion.div>
			<div className="flex flex-col gap-y-2 my-16">
				<div className="flex justify-between relative w-full">
					<div className="h-full absolute bg-gradient-to-transparent flex items-center px-8">
						<div className="size-16 flex items-center justify-center rounded-full bg-white">
							<ArrowIcon />
						</div>
					</div>
					<img className="w-full" src={FeaturedImage} alt="Featured image" />
					<div className="h-full -rotate-180 absolute right-0 bg-gradient-to-transparent flex items-center px-8">
						<div className="size-16 flex items-center justify-center rounded-full bg-white">
							<ArrowIcon />
						</div>
					</div>
				</div>
				<motion.div
					initial={{ translateY: 40, opacity: 0 }}
					whileInView={{ translateY: 0, opacity: 1 }}
					transition={{ type: "keyframes" }}
					className="flex flex-col gap-y-2 items-center"
				>
					<span className="text-gray-300 font-poppins text-base tracking-[0.02em]">
						(Photo by Joe Felix/Liverpool.co)
					</span>
					<span className="text-black font-poppins text-lg tracking-[0.02em]">
						Liverpool’s Home & Away Kit 2022/2023 Season.
					</span>
				</motion.div>
			</div>
		</section>
	);
};

export default Featured;
