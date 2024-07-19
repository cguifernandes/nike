import { motion } from "framer-motion";
import { useState } from "react";

const ProductItem = ({ src, text }: { src: string; text: string }) => {
	const [onHoverTransition, setOnHoverTransition] = useState(false);

	return (
		<motion.div animate={onHoverTransition ? "enter" : "leave"}>
			<div
				onMouseEnter={() => setOnHoverTransition(true)}
				onMouseLeave={() => setOnHoverTransition(false)}
				className="flex items-center relative justify-center w-[294px] h-[386px]"
			>
				<img src={src} alt="New Comer" />
				<motion.span
					variants={{
						leave: { scale: 1.0 },
						enter: { scale: 1.2 },
					}}
					className="font-satoshi pointer-events-none font-medium absolute text-[40px] leading-[54px] text-white"
				>
					{text}
				</motion.span>
			</div>
		</motion.div>
	);
};

export default ProductItem;
