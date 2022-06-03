export interface Datum {
	id: number;
	name: string;
}

export interface Links {
	self: string;
}

export interface SkillModel {
	countries: Datum[];
	links: Links;
}

