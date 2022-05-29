import * as S from "./LayoutBanner.style";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LayoutBannerUI = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <S.BannerWrapper>
      <Slider {...settings}>
        <S.BannerImg src="/image/banner/banner_img1.png" />
        <S.BannerImg src="/image/banner/banner_img2.png" />
        <S.BannerImg src="/image/banner/banner_img3.png" />
      </Slider>
    </S.BannerWrapper>
  );
};

export default LayoutBannerUI;
