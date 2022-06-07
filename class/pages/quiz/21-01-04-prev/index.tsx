import { useState } from "react";

const PrevPage = () => {
	// const [state, setState] = useState(0);
	// setState((qwer) => prev + 1);

	const [qwer, setState] = useState(0);
	setState((qwer) => qwer + 1);

	return <></>;
};

export default PrevPage;
