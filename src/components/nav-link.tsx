import { type VariantProps, tv } from "tailwind-variants";

const navLink = tv({
	base: "font-satoshi font-normal relative",
	variants: {
		size: {
			sm: "text-sm",
			md: "text-md",
			lg: "text-lg",
		},
	},
});

interface Props extends VariantProps<typeof navLink> {
	text: string;
	className?: string;
	href?: string;
	label?: string;
}

const NavLink = ({ text, label, size, href, className }: Props) => {
	return (
		<li
			className={navLink({
				size,
				className,
			})}
		>
			{label && (
				<label className="text-[10px] -right-5 -top-5 bg-red-600 h-[22px] font-normal text-white absolute w-[34px] text-center rounded-3xl py-1 px-1.5">
					{label}
				</label>
			)}
			{href ? <a href={href}>{text}</a> : <span>{text}</span>}
		</li>
	);
};

export default NavLink;
