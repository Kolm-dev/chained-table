import { useParams } from "react-router-dom";
import { campaigns } from "../data/fetchedData";

import BackButton from "./BackButton";

import "./styles/Campaigns.css";
import { useMemo, useState } from "react";
import { ICampaign } from "../types";

type sortField = "clicks" | "cost" | "date";

export const Campaigns = () => {
	const { profileId } = useParams<{ profileId: string }>();
	const [page, setPage] = useState(1);
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [itemsOnPage, _] = useState(5);

	const filteredCampaigns = campaigns.filter(c => c.profileId === Number(profileId));

	const [sortBy, setSortBy] = useState<sortField>("clicks");
	const sortHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setSortBy(event.target.value as sortField);
		setPage(1);
	};

	const sorted = useMemo(() => {
		return [...filteredCampaigns].sort((first: ICampaign, second: ICampaign) => {
			if (sortBy === "date") {
				return new Date(first[sortBy]).getTime() - new Date(second[sortBy]).getTime();
			} else {
				return (first[sortBy] as number) - (second[sortBy] as number);
			}
		});
	}, [filteredCampaigns, sortBy]);

	const campaignsPagination = useMemo(() => {
		const lastElement = page * itemsOnPage;
		const firstElement = lastElement - itemsOnPage;

		return sorted.slice(firstElement, lastElement);
	}, [sorted, page, itemsOnPage]);

	const totalPage = Math.ceil(sorted.length / itemsOnPage);
	return (
		<>
			<BackButton />
			<div className="campaigns-container text-center">
				{!filteredCampaigns.length ? (
					<h4>NO CAMPAIGNS FOR PROFILE ID {profileId}</h4>
				) : (
					<>
						{campaignsPagination.map(c => (
							<div
								className="campaign"
								key={c.campaignId}
							>
								<p>Campaign ID: {c.campaignId}</p>
								<p>
									Clicks {c.clicks}, cost: ${c.cost} <br />
									Total price: {(c.clicks * c.cost).toFixed(2)}$
								</p>
								<p>Created: {c.date}</p>
							</div>
						))}
					</>
				)}
			</div>
			<div
				style={{ display: filteredCampaigns.length ? "flex" : "none" }}
				className="utils"
			>
				<button
					onClick={() => setPage(page - 1)}
					disabled={page === 1}
				>
					Prev
				</button>
				<p>Total pages: {totalPage}</p>
				<button
					onClick={() => setPage(page + 1)}
					disabled={page === totalPage}
				>
					Next
				</button>
				<div>
					<span>Sort by </span>
					<br />
					<div>
						<select
							value={sortBy}
							onChange={sortHandler}
						>
							<option value="clicks">Clicks</option>
							<option value="cost">Cost</option>
							<option value="date">Date</option>
						</select>
					</div>
				</div>
			</div>
		</>
	);
};
