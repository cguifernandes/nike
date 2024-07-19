import HeroImage from "../../assets/hero-image.png";
import { motion } from "framer-motion";

const HeroBanner = () => {
	return (
		<section className="relative min-h-[calc(100vh_-_100px)]">
			<div className="w-full relative h-[220px] flex flex-col">
				<motion.span
					initial={{ translateY: -40, opacity: 0 }}
					whileInView={{ translateY: 0, opacity: 1 }}
					viewport={{ once: true }}
					transition={{
						type: "keyframes",
						duration: 0.4,
					}}
					className="text-[180px] tracking-[-0.03em] h-fit text-center absolute w-full text-pretty font-poppins special-text font-bold text-dark-blue-200/25"
				>
					THE NEW 2023
				</motion.span>
				<motion.span
					initial={{ translateY: -40, opacity: 0 }}
					whileInView={{ translateY: 0, opacity: 1 }}
					viewport={{ once: true }}
					transition={{
						type: "keyframes",
						delay: 0.2,
						duration: 0.8,
					}}
					className="text-[230px] tracking-[-0.06em] h-fit text-center absolute -bottom-44 w-full text-pretty font-poppins linear-text font-extrabold text-dark-blue-200/25"
				>
					AIR JORDAN
				</motion.span>
			</div>
			<motion.img
				initial={{ opacity: 0, top: 120 }}
				whileInView={{ opacity: 1, top: 190 }}
				viewport={{ once: true }}
				transition={{
					type: "keyframes",
					delay: 0.6,
					duration: 0.8,
				}}
				className="w-[1075px] left-1/2 -translate-x-1/2 absolute"
				src={HeroImage}
				alt="Hero Image"
			/>
		</section>
	);
};

export default HeroBanner;
