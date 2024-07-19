import NewComer from "../../assets/new-comer.png";
import Men from "../../assets/men.png";
import Women from "../../assets/women.png";
import Kids from "../../assets/kids.png";
import { motion } from "framer-motion";

const Product = () => {
	return (
		<section className="flex pt-6 flex-col">
			<motion.div
				initial={{ translateY: -40, opacity: 0 }}
				whileInView={{ translateY: 0, opacity: 1 }}
				transition={{ type: "keyframes" }}
				className="flex flex-col gap-y-5 items-center"
			>
				<h1 className="text-[56px] font-bold font-poppins">Just do it</h1>
				<span className="text-gray-200 text-lg font-normal font-poppins">
					Captures messages that stands for more than just sport.{" "}
				</span>
			</motion.div>
			<div className="flex justify-center gap-x-6 my-16">
				<motion.div
					initial={{ translateY: -40, opacity: 0 }}
					whileInView={{ translateY: 0, opacity: 1 }}
					transition={{ type: "keyframes" }}
					className="flex items-center relative justify-center w-[294px] h-[386px]"
				>
					<img src={NewComer} alt="New Comer" />
					<motion.span className="font-satoshi pointer-events-none font-medium absolute text-[40px] leading-[54px] text-white">
						Newcomer
					</motion.span>
				</motion.div>
				<motion.div
					initial={{ translateY: -40, opacity: 0 }}
					whileInView={{ translateY: 0, opacity: 1 }}
					transition={{ type: "keyframes", delay: 0.2 }}
					className="flex items-center relative justify-center w-[294px] h-[386px]"
				>
					<img src={Men} alt="New Comer" />
					<motion.span className="font-satoshi pointer-events-none font-medium absolute text-[40px] leading-[54px] text-white">
						Men
					</motion.span>
				</motion.div>
				<motion.div
					initial={{ translateY: -40, opacity: 0 }}
					whileInView={{ translateY: 0, opacity: 1 }}
					transition={{ type: "keyframes", delay: 0.4 }}
					className="flex items-center relative justify-center w-[294px] h-[386px]"
				>
					<img src={Women} alt="New Comer" />
					<motion.span className="font-satoshi pointer-events-none font-medium absolute text-[40px] leading-[54px] text-white">
						Women
					</motion.span>
				</motion.div>
				<motion.div
					initial={{ translateY: -40, opacity: 0 }}
					whileInView={{ translateY: 0, opacity: 1 }}
					transition={{ type: "keyframes", delay: 0.6 }}
					className="flex items-center relative justify-center w-[294px] h-[386px]"
				>
					<img src={Kids} alt="New Comer" />
					<motion.span className="font-satoshi pointer-events-none font-medium absolute text-[40px] leading-[54px] text-white">
						Kids
					</motion.span>
				</motion.div>
			</div>
		</section>
	);
};

export default Product;
