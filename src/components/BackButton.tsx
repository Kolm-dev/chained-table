import { useNavigate } from "react-router-dom";

const BackButton = () => {
	const navigate = useNavigate();

	return (
		<button
			style={{
				position: "fixed",
				top: "50px",
				left: "50px",
				padding: "10px",
				backgroundColor: "blue",
				color: "white",
				border: "none",
				borderRadius: "5px",
				cursor: "pointer",
			}}
			onClick={() => navigate(-1)}
		>
			Back
		</button>
	);
};

export default BackButton;
