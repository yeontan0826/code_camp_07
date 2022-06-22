/* props가 없을때에는 memo로 인해 불필요한 리랜더링이 되지 않지만
 * props가 있을떄는 자동으로 memo가 적용이 안되면서 리랜더링이 진행된다.
 */

import { memo } from "react";

const MemoizationPresenterPage = (props: any) => {
	console.log("Rendered Presenter Page");

	return (
		<div>
			<div>==================================</div>
			<h1>이것은 Presenter입니다.</h1>
			{props.countState}
			<div>==================================</div>
		</div>
	);
};

export default memo(MemoizationPresenterPage);
