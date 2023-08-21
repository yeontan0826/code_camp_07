import { useMoveToPage } from "../../hooks/useMoveToPage";
import * as N from "./LayoutNavigation.style";

const LayoutNavigationUI = () => {
    const { onMoveToPage } = useMoveToPage();
    return (
        <N.Wrapper>
            <N.Container>
                <N.Logo src={"/images/logo/logo_black.webp"} onClick={onMoveToPage(`/`)} />
                <N.SellContainer onClick={onMoveToPage(`/write`)}>
                    <N.SellIcon src={"/images/icons/ic_sell.webp"} />
                    <N.SellSpan>판매하기</N.SellSpan>
                </N.SellContainer>
            </N.Container>
        </N.Wrapper>
    );
};

export default LayoutNavigationUI;
