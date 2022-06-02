import styled from "@emotion/styled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Wrapper = styled.div`
  height: 200px;
  background-color: pink;
`;

const SlideBox = styled.div`
  width: 300px;
  margin: auto;
`;

const SlideImg = styled.img`
  height: 150px;
  margin: auto;
`;

const LayoutBanner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Wrapper>
      <SlideBox>
        <Slider {...settings}>
          <div>
            <SlideImg src="/image/puppy/puppy1.jpg" />
          </div>
          <div>
            <SlideImg src="/image/puppy/puppy2.jpeg" />
          </div>
          <div>
            <SlideImg src="/image/puppy/puppy3.jpeg" />
          </div>
          <div>
            <SlideImg src="/image/puppy/puppy4.jpeg" />
          </div>
          <div>
            <SlideImg src="/image/puppy/puppy5.jpeg" />
          </div>
        </Slider>
      </SlideBox>
    </Wrapper>
  );
};

export default LayoutBanner;
