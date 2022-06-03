export interface Datum {
	id: number;
	iso2: string;
	name: string;
}

export interface Links {
	self: string;
}

export interface Countries {
	countries: Datum[];
	links: Links;
}

