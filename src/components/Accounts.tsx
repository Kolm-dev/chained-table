import { useNavigate } from "react-router-dom";
import { accounts } from "../data/fetchedData";
import "./styles/Accounts.css";

export const Accounts = () => {
	const navigate = useNavigate();

	const clickOnProfile = (accountID: number) => {
		navigate(`/accounts/${accountID}/profiles`);
	};

	return (
		<>
			<h3 className="accounts-header text-uppercase col-12">
				Total accounts: {accounts.length}
			</h3>
			<div className="accounts-container">
				{accounts.map((account, index) => {
					return (
						<div
							key={account.accountId}
							onClick={() => clickOnProfile(account.accountId)}
							className="account fs-5 col-4"
							style={{ width: "33%", margin: "0 10px" }}
						>
							<h4 className="text-center card-title fw-semibold fs-5  mb-4">
								Profile: {index + 1}
							</h4>
							<div className="info-block">
								<p>
									ID: {account.accountId}, token: {account.authToken}
								</p>
								<p>Email: {account.email}</p>
								<p>Creation date: {account.creationDate}</p>
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
};
