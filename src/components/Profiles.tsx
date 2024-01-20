import { useNavigate, useParams } from "react-router-dom";
import { profiles } from "../data/fetchedData";

import BackButton from "./BackButton";

import "./styles/Profiles.css";

interface IEmojiObject {
	[key: string]: string;
}

const countryEmoji: IEmojiObject = {
	France: "🇫🇷",
	Canada: "🇨🇦",
	USA: "🇺🇸",
	Italy: "🇮🇹",
	Greece: "🇬🇷",
	Ireland: "🇮🇪",
	Germany: "🇩🇪",
	Poland: "🇵🇱",
	Moldova: "🇲🇩",
	Netherlands: "🇳🇱",
};

export const Profiles = () => {
	const { accountId } = useParams();
	const navigate = useNavigate();
	const onClickProfile = (profileId: number) => {
		navigate(`/profiles/${profileId}/campaigns`);
	};

	return (
		<div>
			<BackButton />
			<h4 className=" profiles-header text-uppercase text-center mb-4 flex-1 w-100">
				Profiles for account with id {accountId}
			</h4>
			<div className="profiles row d-flex col-12 container g-0">
				{profiles
					.filter(profile => profile.accountId == Number(accountId))
					.map(profile => {
						return (
							<div
								onClick={() => onClickProfile(profile.profileId)}
								key={profile.profileId}
								className="profile bg-body-secondary mx-1 my-1 col-2 rounded text-center pointer card card-body"
							>
								<p className="d-flex flex-column text-black">
									<span>ID: {profile.accountId}</span>
									<span>
										Country: {profile.country} {countryEmoji[profile.country]}
									</span>
									<span>Marketplace: {profile.marketplace}</span>
								</p>
							</div>
						);
					})}
			</div>
		</div>
	);
};
