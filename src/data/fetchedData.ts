import { IAccount, IProfile, ICampaign } from "../types";

export const profiles: IProfile[] = [
	{ country: "France", marketplace: "eBay", profileId: 1, accountId: 1 },
	{ country: "Canada", marketplace: "Amazon", profileId: 2, accountId: 1 },
	{ country: "USA", marketplace: "Amazon", profileId: 3, accountId: 2 },
	{ country: "Italy", marketplace: "eBay", profileId: 4, accountId: 2 },
	{ country: "Greece", marketplace: "eBay", profileId: 5, accountId: 3 },
	{ country: "Ireland", marketplace: "Amazon", profileId: 4, accountId: 3 },
	{ country: "Germany", marketplace: "Amazon", profileId: 4, accountId: 1 },
	{ country: "Poland", marketplace: "Amazon", profileId: 7, accountId: 2 },
	{ country: "Moldova", marketplace: "Amazon", profileId: 6, accountId: 3 },
	{ country: "Netherlands", marketplace: "Amazon", profileId: 6, accountId: 1 },
	{ country: "Spain", marketplace: "eBay", profileId: 6, accountId: 4 },
	{ country: "Australia", marketplace: "Amazon", profileId: 5, accountId: 4 },
	{ country: "Brazil", marketplace: "Amazon", profileId: 3, accountId: 4 },
];

export const campaigns: ICampaign[] = [
	{ campaignId: 1, profileId: 1, clicks: 120, cost: 20.5, date: "2023-12-28" },
	{ campaignId: 2, profileId: 1, clicks: 150, cost: 30.2, date: "2023-12-29" },
	{ campaignId: 3, profileId: 2, clicks: 100, cost: 5.8, date: "2023-12-30" },
	{ campaignId: 4, profileId: 2, clicks: 110, cost: 6.4, date: "2023-12-31" },
	{ campaignId: 5, profileId: 3, clicks: 140, cost: 7.9, date: "2024-01-01" },
	{ campaignId: 6, profileId: 3, clicks: 130, cost: 6.2, date: "2024-01-02" },
	{ campaignId: 7, profileId: 4, clicks: 160, cost: 9.1, date: "2024-01-03" },
	{ campaignId: 8, profileId: 4, clicks: 170, cost: 2.3, date: "2024-01-04" },
	{ campaignId: 9, profileId: 5, clicks: 180, cost: 1.9, date: "2024-01-05" },
	{ campaignId: 10, profileId: 5, clicks: 190, cost: 2.5, date: "2024-01-06" },
	{ campaignId: 11, profileId: 4, clicks: 190, cost: 2.5, date: "2024-01-07" },

];

export const accounts: IAccount[] = [
	{
		accountId: 1,
		authToken: "authToken1",
		creationDate: "2023-12-29",
		email: "account1@example.com",
	},
	{
		accountId: 2,
		authToken: "authToken2",
		creationDate: "2023-12-28",
		email: "account2@example.com",
	},
	{
		accountId: 3,
		authToken: "authToken3",
		creationDate: "2023-12-30",
		email: "account3@example.com",
	},
	{
		accountId: 4,
		authToken: "authToken4",
		creationDate: "2023-12-31",
		email: "account4@example.com",
	},
];
