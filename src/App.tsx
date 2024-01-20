import "./App.css";
import { Accounts } from "./components/Accounts";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Profiles } from "./components/Profiles";
import { Campaigns } from "./components/Campaigns";


function App() {
	return (
		<BrowserRouter>

			<Routes>
				<Route
					path="/"
					element={<Accounts />}
				/>
				<Route
					path="/accounts/:accountId/profiles"
					element={<Profiles />}
				/>
				<Route
					path="/profiles/:profileId/campaigns"
					element={<Campaigns />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
