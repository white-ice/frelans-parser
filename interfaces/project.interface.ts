export interface Skill {
	id: number;
	name: string;
}

export interface Status {
	id: number;
	name: string;
}

export interface Budget {
	amount: number;
	currency: string;
}

export interface Small {
	url: string;
	width: number;
	height: number;
}

export interface Large {
	url: string;
	width: number;
	height: number;
}

export interface Avatar {
	small: Small;
	large: Large;
}

export interface Employer {
	id: number;
	type: string;
	login: string;
	first_name: string;
	last_name: string;
	avatar: Avatar;
	self: string;
}

export interface Attributes {
	name: string;
	description: string;
	description_html: string;
	skills: Skill[];
	status: Status;
	budget: Budget;
	bid_count: number;
	is_remote_job: boolean;
	is_premium: boolean;
	is_only_for_plus: boolean;
	location?: any;
	safe_type: string;
	is_personal?: any;
	employer: Employer;
	freelancer?: any;
	updates: any[];
	published_at: Date;
	expired_at: Date;
}

export interface Self {
	api: string;
	web: string;
}

export interface Links {
	self: Self;
	comments: string;
	bids: string;
}

export interface Data {
	id: number;
	type: string;
	attributes: Attributes;
	links: Links;
}

export interface LinkProject {
	self: string;
}

export interface ProjectModel {
	data: Data;
	links: LinkProject;
}
