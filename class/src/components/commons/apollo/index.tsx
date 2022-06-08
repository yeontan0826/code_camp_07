import { ApolloClient, ApolloLink, ApolloProvider, InMemoryCache } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";

const ApolloSetting = (props: any) => {
	// const [isEdit, setIsEdit] = useState(false);

	const [accessToken] = useRecoilState(accessTokenState);

	const uploadLink = createUploadLink({
		uri: "http://backend07.codebootcamp.co.kr/graphql",
		headers: { Authorization: `Bearer ${accessToken}` },
	});

	const client = new ApolloClient({
		link: ApolloLink.from([uploadLink as unknown as ApolloLink]),
		cache: new InMemoryCache(),
	});

	return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
};

export default ApolloSetting;
