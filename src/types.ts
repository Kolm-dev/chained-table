export interface IAccount {
	accountId: number;
	email: string;
	authToken: string;
	creationDate: string;
}

export interface IProfile {
	profileId: number;
	accountId: number; // IAccount id
	country: string;
	marketplace: string;
}

export interface ICampaign {
	campaignId: number;
	profileId: number; // IProfile id
	clicks: number;
	cost: number;
	date: string;
}
