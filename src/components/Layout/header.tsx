import BagIcon from "../../assets/BagIcon";
import Logo from "../../assets/Logo";
import SearchIcon from "../../assets/SearchIcon";
import NavLink from "../nav-link";

const Header = () => {
	return (
		<header className="flex flex-col">
			<nav className="bg-gray-100 py-2">
				<div className="flex justify-between max-w-[1140px] mx-auto px-6">
					<ul className="flex gap-x-7">
						<NavLink href="#" text="Guides" size="sm" />
						<NavLink href="#" text="Terms of Sale" size="sm" />
						<NavLink href="#" text="Terms of Use" size="sm" />
						<NavLink href="#" text="Privacy & Policy" size="sm" />
					</ul>
					<span className="text-sm font-satoshi font-normal">
						<a href="#">Login</a>&nbsp;/&nbsp;<a href="#">Register</a>
					</span>
				</div>
			</nav>
			<nav className="justify-between h-16 flex items-center px-6 max-w-[1140px] mx-auto w-full">
				<div className="flex items-center gap-x-12">
					<Logo />
					<ul className="flex gap-x-7">
						<NavLink href="#" text="Men" size="md" className="font-medium" />
						<NavLink href="#" text="Woman" size="md" className="font-medium" />
						<NavLink href="#" text="Kids" size="md" className="font-medium" />
						<NavLink
							href="#"
							text="Customise"
							size="md"
							className="font-medium"
						/>
						<NavLink
							label="20%"
							href="#"
							text="Sale"
							size="md"
							className="font-medium"
						/>
						<NavLink
							href="#"
							text="Shipping"
							size="md"
							className="font-medium"
						/>
					</ul>
				</div>
				<div className="flex gap-x-5">
					<SearchIcon />
					<BagIcon />
				</div>
			</nav>
		</header>
	);
};

export default Header;
