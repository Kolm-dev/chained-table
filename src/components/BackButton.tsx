import { useNavigate } from "react-router-dom";

const BackButton = () => {
	const navigate = useNavigate();

	return <button style={{position: "fixed", top: "50px", left:"50px"}}onClick={() => navigate(-1)}>Back</button>;
};

export default BackButton;
