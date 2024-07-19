import NewComer from "../../assets/new-comer.png";
import Men from "../../assets/men.png";
import Women from "../../assets/women.png";
import Kids from "../../assets/kids.png";
import { motion } from "framer-motion";
import ProductItem from "../item-product";

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
				<ProductItem src={NewComer} text="Newcomer" />
				<ProductItem src={Men} text="Men" />
				<ProductItem src={Women} text="Women" />
				<ProductItem src={Kids} text="Kids" />
			</div>
		</section>
	);
};

export default Product;
