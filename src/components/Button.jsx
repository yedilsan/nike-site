const Button = ({
	label,
	iconUrl,
	backgroundColor,
	borderColor,
	textColor,
	fullWidth,
}) => {
	return (
		<button
			className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none ${
				backgroundColor
					? `${backgroundColor} ${borderColor} ${textColor}`
					: 'bg-coral-red text-white border-coral-red'
			} rounded-full ${
				fullWidth && 'fullWidth'
			} focus:ring-4 focus:ring-orange-500 focus:ring-opacity-50 focus:outline-none`}
		>
			{label}
			{iconUrl && (
				<img
					src={iconUrl}
					alt='arrow right icon'
					className='ml-2 rounded-full w-5 h-5'
				/>
			)}
		</button>
	);
};

export default Button;
