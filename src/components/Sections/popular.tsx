import ArrowIcon from "../../assets/icons/ArrowIcon";
import Popular1 from "../../assets/popular1.png";
import Popular2 from "../../assets/popular2.png";
import Popular3 from "../../assets/popular3.png";
import Popular4 from "../../assets/popular4.png";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useState } from "react";
import { motion } from "framer-motion";

const Popular = () => {
	const [swiperRef, setSwiperRef] = useState<SwiperClass | null>(null);
	const [sliderIndex, setSliderIndex] = useState(0);

	const sliderElements = [
		<motion.img
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ type: "keyframes" }}
			key={1}
			src={Popular1}
			className="w-[400px] rounded-lg h-[536px]"
			alt="Imagem popular section"
		/>,
		<motion.img
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ type: "keyframes", delay: 0.2 }}
			key={2}
			src={Popular2}
			className="w-[400px] rounded-lg h-[536px]"
			alt="Imagem popular section"
		/>,
		<motion.img
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ type: "keyframes", delay: 0.4 }}
			key={3}
			src={Popular3}
			className="w-[400px] rounded-lg h-[536px]"
			alt="Imagem popular section"
		/>,
		<motion.img
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ type: "keyframes" }}
			key={4}
			src={Popular4}
			className="w-[400px] rounded-lg h-[536px]"
			alt="Imagem popular section"
		/>,
	];

	const handleSlideChange = (swiper: SwiperClass) => {
		setSliderIndex(swiper.activeIndex);
	};

	return (
		<section className="flex flex-col px-20">
			<div className="flex justify-between items-end">
				<motion.div
					initial={{ translateX: -40, opacity: 0 }}
					whileInView={{ translateX: 0, opacity: 1 }}
					transition={{ type: "keyframes" }}
					className="flex flex-col gap-y-5"
				>
					<h1 className="text-[56px] font-bold font-poppins">Popular Picks</h1>
					<span className="text-gray-200 text-lg font-normal font-poppins">
						Our popular picks for most favorited Nike Men’s & Women’s shoes.
					</span>
				</motion.div>
				<motion.div
					initial={{ translateX: 40, opacity: 0 }}
					whileInView={{ translateX: 0, opacity: 1 }}
					transition={{ type: "keyframes" }}
					className="gap-x-2 flex items-center"
				>
					<button
						type="button"
						disabled={sliderIndex === 0}
						className="border-[1.5px] border-black rounded-xl size-10 flex items-center transition-all justify-center disabled:opacity-40 disabled:cursor-not-allowed"
						onClick={() => swiperRef?.slidePrev()}
					>
						<ArrowIcon className="size-5" />
					</button>
					<button
						type="button"
						disabled={sliderIndex === sliderElements.length - 3}
						className="border-[1.5px] border-black rounded-xl size-10 flex items-center transition-all justify-center disabled:opacity-40 disabled:cursor-not-allowed"
						onClick={() => swiperRef?.slideNext()}
					>
						<ArrowIcon className="-rotate-180 size-5" />
					</button>
				</motion.div>
			</div>
			<div className="my-16">
				<Swiper
					onSwiper={setSwiperRef}
					onSlideChange={handleSlideChange}
					modules={[Navigation]}
					autoplay
					spaceBetween={24}
					navigation={{
						nextEl: ".swiper-button-next",
						prevEl: ".swiper-button-prev",
					}}
					slidesPerView={3}
				>
					{sliderElements.map((el, key) => (
						<SwiperSlide
							key={key}
							className="rounded-lg !overflow-visible !flex justify-center relative"
						>
							{el}
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
};

export default Popular;
