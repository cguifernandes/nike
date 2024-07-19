import Facebook from "../../assets/icons/Facebook";
import Mail from "../../assets/icons/Mail";
import Twitter from "../../assets/icons/Twitter";

const Footer = () => {
	return (
		<footer className="flex py-20 items-end justify-between bg-black px-16">
			<div className="flex gap-x-16">
				<div className="flex flex-col gap-y-3 font-poppins text-white">
					<h1 className="font-semibold">MENU</h1>
					<span className="font-normal text-sm uppercase">FIND A STORE</span>
					<span className="font-normal text-sm uppercase">BECOME A MEMBER</span>
					<span className="font-normal text-sm uppercase">
						SIGN UP FOR EMAIL
					</span>
					<span className="font-normal text-sm uppercase">
						STUDENT DISCOUNTS
					</span>
					<span className="font-normal text-sm uppercase">
						SEND US FEEDBACK
					</span>
				</div>
				<div className="flex flex-col gap-y-3 font-poppins text-white">
					<h1 className="font-semibold">HELPDESK</h1>
					<span className="font-normal text-sm uppercase">Order Status</span>
					<span className="font-normal text-sm uppercase">Delivery</span>
					<span className="font-normal text-sm uppercase">Returns</span>
					<span className="font-normal text-sm uppercase">Payment Options</span>
					<span className="font-normal text-sm uppercase">Contact Us</span>
				</div>
				<div className="flex flex-col gap-y-3 font-poppins text-white">
					<h1 className="font-semibold">ABOUT NIKE</h1>
					<span className="font-normal text-sm uppercase">News</span>
					<span className="font-normal text-sm uppercase">Careers</span>
					<span className="font-normal text-sm uppercase">Investors</span>
					<span className="font-normal text-sm uppercase">Sustainability</span>
				</div>
			</div>
			<div className="flex flex-col gap-y-4">
				<div className="flex flex-col gap-y-px text-right text-white font-poppins">
					<h1 className="font-semibold">Primary Address</h1>
					<span className="font-light">One Bowerman Drive</span>
					<span className="font-light">Beaverton, OR 97005-6453</span>
					<span className="font-light">USA</span>
				</div>
				<div className="flex gap-x-3 justify-end">
					<Twitter />
					<Facebook />
					<Mail />
				</div>
				<span className="text-sm font-light text-white font-poppins">
					© 2022 Nike, Inc. All Rights Reserved
				</span>
			</div>
		</footer>
	);
};

export default Footer;
