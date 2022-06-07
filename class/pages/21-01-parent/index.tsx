import ChildPage from "../21-02-child";

const ParentPage = () => {
	// return <ChildPage count={123} />;
	return <>{ChildPage({ count: 123 })}</>;
};

export default ParentPage;
