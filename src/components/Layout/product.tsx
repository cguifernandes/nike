import NewComer from "../../assets/new-comer.png";
import Men from "../../assets/men.png";
import Women from "../../assets/women.png";
import Kids from "../../assets/kids.png";

const Product = () => {
	return (
		<div className="flex flex-col">
			<div className="flex flex-col gap-y-5 items-center">
				<h1 className="text-[56px] font-bold font-poppins">Just do it</h1>
				<span className="text-gray-200 text-lg font-normal font-poppins">
					Captures messages that stands for more than just sport.{" "}
				</span>
			</div>
			<div className="flex justify-center gap-x-6 my-16">
				<div className="flex items-center relative justify-center w-[294px] h-[386px]">
					<img src={NewComer} alt="New Comer" />
					<span className="font-satoshi font-medium absolute text-[40px] leading-[54px] text-white">
						Newcomer
					</span>
				</div>
				<div className="flex items-center relative justify-center w-[294px] h-[386px]">
					<img src={Men} alt="New Comer" />
					<span className="font-satoshi font-medium absolute text-[40px] leading-[54px] text-white">
						Men
					</span>
				</div>
				<div className="flex items-center relative justify-center w-[294px] h-[386px]">
					<img src={Women} alt="New Comer" />
					<span className="font-satoshi font-medium absolute text-[40px] leading-[54px] text-white">
						Women
					</span>
				</div>
				<div className="flex items-center relative justify-center w-[294px] h-[386px]">
					<img src={Kids} alt="New Comer" />
					<span className="font-satoshi font-medium absolute text-[40px] leading-[54px] text-white">
						Kids
					</span>
				</div>
			</div>
		</div>
	);
};

export default Product;
