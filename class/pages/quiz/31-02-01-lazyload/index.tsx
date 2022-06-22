import styled from "@emotion/styled";
import LazyLoad from "react-lazyload";

const IMG_URL = [
	"https://phinf.pstatic.net/contact/20180220_51/1519127622551xPuJR_JPEG/image.jpg",
	"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/35302887-bf5b-4c46-a9e0-fc72c65ffb50/d2zaii3-22e60a2b-a164-44bd-a487-cb16589a4799.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzM1MzAyODg3LWJmNWItNGM0Ni1hOWUwLWZjNzJjNjVmZmI1MFwvZDJ6YWlpMy0yMmU2MGEyYi1hMTY0LTQ0YmQtYTQ4Ny1jYjE2NTg5YTQ3OTkuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.hm2OTe9W756fttOuga2kQ5lWBIWQcTyfHkS8qvTygyQ",
	"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ffefa982-bfab-47ee-ae9d-dca467d9dfe4/d84o1am-cf69c17f-d08d-444b-a3a6-368f39517d02.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2ZmZWZhOTgyLWJmYWItNDdlZS1hZTlkLWRjYTQ2N2Q5ZGZlNFwvZDg0bzFhbS1jZjY5YzE3Zi1kMDhkLTQ0NGItYTNhNi0zNjhmMzk1MTdkMDIuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.B90L-NhzNyxi5e02tsNVAbWZYZkEoQh261YSbtOX2jY",
	"https://farm9.staticflickr.com/8410/30193245810_7b7ff74cd5.jpg",
	"https://fejudam.com/wp-content/uploads/2014/02/image-placeholder-500x500-1.jpg",
	"https://as1.ftcdn.net/v2/jpg/01/41/11/64/1000_F_141116428_V5guspEHFFY0a9VvpEiC0QUHDbYyoDD9.jpg",
	"https://m.powergnome.kr/web/mobile/newDesign/238877264545cd9543a9d0.jpg",
	"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Hazard_X.svg/500px-Hazard_X.svg.png",
	"https://lsusmath.rickmabry.org/rmabry/knots/newfauxtrefoil-500x500.jpg",
	"https://i0.wp.com/www.hellodigital.kr/wp-content/uploads/2019/06/500X500-3.jpg?fit=500%2C500&ssl=1",
];
const lazyHeight = 500;

const LazyLoadPage = () => {
	return (
		<DivColmn>
			{IMG_URL.map((url, index) => (
				<LazyLoad key={index} height={lazyHeight}>
					<CusImg src={url} />
				</LazyLoad>
			))}
		</DivColmn>
	);
};

export default LazyLoadPage;

const DivColmn = styled.div`
	display: flex;
	flex-direction: column;
`;

const CusImg = styled.img`
	width: 500px;
	height: 500px;
`;
