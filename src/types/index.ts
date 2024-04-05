export interface CustomHeadingProps {
	title: string;
}

export interface SmallInfoProps {
	title: string;
	text: string;
}

export interface HomeProjectCardProps {
	title: string;
}

export interface CustomButtonProps {
	type: 'submit' | 'button' | 'reset' | undefined;
	title: string;
}

export interface CustomInputProps {
	label?: string;
	type: string;
	name?: string;
	placeholder?: string;
	autocomplete?: string;
	value?: string;
	setState: () => void;
}

export interface TransitionProps {
	OgComponent: string;
}

export interface PortfolioProjectCardProps {
	title: string;
	preview: string;
}
