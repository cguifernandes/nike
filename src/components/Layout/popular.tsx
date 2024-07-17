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

const Popular = () => {
	const [swiperRef, setSwiperRef] = useState<SwiperClass | null>(null);
	const [sliderIndex, setSliderIndex] = useState(0);
	const sliderElements = [
		<img
			key={1}
			src={Popular1}
			className="w-[400px] rounded-lg h-[536px]"
			alt="Imagem popular section"
		/>,
		<img
			key={2}
			src={Popular2}
			className="w-[400px] rounded-lg h-[536px]"
			alt="Imagem popular section"
		/>,
		<img
			key={3}
			src={Popular3}
			className="w-[400px] rounded-lg h-[536px]"
			alt="Imagem popular section"
		/>,
		<img
			key={4}
			src={Popular4}
			className="w-[400px] rounded-lg h-[536px]"
			alt="Imagem popular section"
		/>,
	];

	swiperRef?.on("slideChange", (ctx) => {
		setSliderIndex(ctx.activeIndex);
	});

	return (
		<section className="flex flex-col px-20">
			<div className="flex justify-between items-end">
				<div className="flex flex-col gap-y-5">
					<h1 className="text-[56px] font-bold font-poppins">Popular Picks</h1>
					<span className="text-gray-200 text-lg font-normal font-poppins">
						Our popular picks for most favorited Nike Men’s & Women’s shoes.
					</span>
				</div>
				<div className="gap-x-2 flex items-center">
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
				</div>
			</div>
			<div className="my-16">
				<Swiper
					onSwiper={(swiper) => setSwiperRef(swiper)}
					modules={[Navigation]}
					autoplay
					breakpoints={{
						768: {
							slidesPerView: 2,
						},
						1280: {
							slidesPerView: 3,
						},
						1536: {
							slidesPerView: 4,
						},
					}}
					spaceBetween={24}
					navigation={{
						nextEl: ".swiper-button-next",
						prevEl: ".swiper-button-prev",
					}}
					slidesPerView={3}
				>
					{sliderElements.map((el, index) => (
						<SwiperSlide className="rounded-lg" key={index}>
							{el}
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
};

export default Popular;
