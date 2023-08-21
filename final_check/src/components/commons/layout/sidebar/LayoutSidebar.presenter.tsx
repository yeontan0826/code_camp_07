import { useEffect, useState } from "react";
import * as S from "./LayoutSidebar.style";

const LayoutSidebarUI = () => {
    const [recentProducts, setRecentProducts] = useState([]);

    useEffect(() => {
        const recentProducts = JSON.parse(sessionStorage.getItem("recentProducts") || "[]");

        if (recentProducts.length > 3) {
            recentProducts.pop();
        }

        setRecentProducts(recentProducts);
    }, [recentProducts.length++]);

    return (
        <>
            <S.Wrapper>
                <S.Title>최근 본 상품</S.Title>
                <S.ProductImgBox>
                    {recentProducts.map((el: any) => (
                        <S.ProductImg
                            key={el._id}
                            src={el.images[0] ? `https://storage.googleapis.com/${el.images[0]}` : "/images/market/list/no_image.webp"}
                        />
                    ))}
                </S.ProductImgBox>
            </S.Wrapper>
        </>
    );
};

export default LayoutSidebarUI;
