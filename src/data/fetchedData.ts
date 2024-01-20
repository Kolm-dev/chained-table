import { IAccount, IProfile, ICampaign } from "../types";

export const profiles: IProfile[] = [
	{ country: "France", marketplace: "eBay", profileId: 1, accountId: 1 },
	{ country: "Canada", marketplace: "Amazon", profileId: 2, accountId: 1 },
	{ country: "USA", marketplace: "Amazon", profileId: 3, accountId: 2 },
	{ country: "Italy", marketplace: "eBay", profileId: 4, accountId: 2 },
	{ country: "Greece", marketplace: "eBay", profileId: 5, accountId: 3 },
	{ country: "Ireland", marketplace: "Amazon", profileId: 6, accountId: 3 },
	{ country: "Germany", marketplace: "Amazon", profileId: 7, accountId: 1 },
	{ country: "Poland", marketplace: "Amazon", profileId: 8, accountId: 2 },
	{ country: "Moldova", marketplace: "Amazon", profileId: 9, accountId: 3 },
	{ country: "Netherlands", marketplace: "Amazon", profileId: 10, accountId: 1 },
	//
];

export const campaigns: ICampaign[] = [
	{ campaignId: 1, profileId: 1, clicks: 12, cost: 2, date: "2024-01-01" },
	{ campaignId: 2, profileId: 1, clicks: 15, cost: 3, date: "2024-01-02" },
	{ campaignId: 3, profileId: 2, clicks: 10, cost: 0.3, date: "2024-01-03" },
	{ campaignId: 4, profileId: 2, clicks: 11, cost: 0.4, date: "2024-01-04" },
	{ campaignId: 5, profileId: 3, clicks: 14, cost: 0.75, date: "2024-01-05" },
	{ campaignId: 6, profileId: 3, clicks: 13, cost: 0.6, date: "2024-01-06" },
	{ campaignId: 7, profileId: 4, clicks: 16, cost: 0.9, date: "2024-01-07" },
	{ campaignId: 8, profileId: 4, clicks: 17, cost: 0.2, date: "2024-01-08" },
	{ campaignId: 9, profileId: 5, clicks: 18, cost: 0.09, date: "2024-01-09" },
	{ campaignId: 10, profileId: 5, clicks: 19, cost: 0.1, date: "2024-01-10" },
	{ campaignId: 11, profileId: 1, clicks: 19, cost: 1, date: "2024-01-10" },
	{ campaignId: 13, profileId: 1, clicks: 19, cost: 1, date: "2024-01-10" },
	{ campaignId: 14, profileId: 1, clicks: 19, cost: 1, date: "2024-01-10" },
	{ campaignId: 15, profileId: 1, clicks: 19, cost: 1, date: "2024-01-10" },
	{ campaignId: 16, profileId: 1, clicks: 19, cost: 1, date: "2024-01-10" },
];

export const accounts: IAccount[] = [
	{
		accountId: 1,
		authToken: "authToken1",
		creationDate: "29-12-2023",
		email: "account1@email.com",
	},
	{
		accountId: 2,
		authToken: "authToken2",
		creationDate: "28-12-2023",
		email: "account2@email.com",
	},
	{
		accountId: 3,
		authToken: "authToken3",
		creationDate: "30-12-2023",
		email: "account3@email.com",
	},
];
