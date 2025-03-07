const SearchIcon = ({ className }: { className?: string }) => {
	return (
		<svg
			width="20"
			height="20"
			viewBox="0 0 20 20"
			className={className}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M9.58342 1.66666C13.9584 1.66666 17.5001 5.20832 17.5001 9.58332C17.5001 13.9583 13.9584 17.5 9.58342 17.5C5.20842 17.5 1.66675 13.9583 1.66675 9.58332C1.66675 6.49999 3.42508 3.83332 6.00008 2.52499"
				stroke="black"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M18.3334 18.3333L16.6667 16.6667"
				stroke="black"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export default SearchIcon;
