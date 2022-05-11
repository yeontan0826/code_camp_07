import { Wrapper, Top, Middle, Bottom, SearchDiv, TitleDiv, Title,  ProfileDiv, Profile,
    ProfileName, TabUnselected, TabSelected, BottomTabDiv, ItemDiv, ItemLeftDiv,
    Question, FaqTitle, BottomTabUnselected, BottomTabSelected } from '../../../styles/faq.js'
    
import Image from 'next/image'
import SearchImage from '../../../public/01-faq-img/ic-search.svg'
import ProfileImage from '../../../public/01-faq-img/ic-profile-image.png'
import Arrow from '../../../public/01-faq-img/ic-arrow.svg'
import ArrowRight from '../../../public/01-faq-img/ic-arrow-right.svg'
import Home from '../../../public/01-faq-img/ic-home-unselected.svg'
import Location from '../../../public/01-faq-img/ic-location-unselected.svg'
import Like from '../../../public/01-faq-img/ic-like-unselected.svg'
import My from '../../../public/01-faq-img/ic-my-selected.svg'

export default function MyPage() {
    return (
        <Wrapper>
            <Top>
                <SearchDiv>
                    <Image src={SearchImage} width={32} height={32}/>
                </SearchDiv>
                <TitleDiv>
                    <Title>마이</Title>
                    <Profile>
                        <Image src={ProfileImage} width={60} height={60}/>
                        <ProfileName>임정아</ProfileName>
                        <Image src={Arrow} width={30} height={30}/>
                    </Profile>
                </TitleDiv>
                <ProfileDiv>
                    <TabUnselected>공지사항</TabUnselected>
                    <TabUnselected>이벤트</TabUnselected>
                    <TabSelected>FAQ</TabSelected>
                    <TabUnselected>Q&A</TabUnselected>
                </ProfileDiv>
            </Top>
            <Middle>
                <ItemDiv>
                    <ItemLeftDiv>
                        <Question>Q. 01</Question>
                        <FaqTitle>리뷰 작성은 어떻게 하나요?</FaqTitle>
                    </ItemLeftDiv>
                    <Image src={ArrowRight} width={60} height={60}/>
                </ItemDiv>
                <ItemDiv>
                    <ItemLeftDiv>
                        <Question>Q. 02</Question>
                        <FaqTitle>리뷰 수정/삭제는 어떻게 하나요?</FaqTitle>
                    </ItemLeftDiv>
                    <Image src={ArrowRight} width={60} height={60}/>
                </ItemDiv>
                <ItemDiv>
                    <ItemLeftDiv>
                        <Question>Q. 03</Question>
                        <FaqTitle>아이디 비밀번호를 잊어버렸어요.</FaqTitle>
                    </ItemLeftDiv>
                    <Image src={ArrowRight} width={60} height={60}/>
                </ItemDiv>
                <ItemDiv>
                    <ItemLeftDiv>
                        <Question>Q. 04</Question>
                        <FaqTitle>회원탈퇴를 하고싶어요.</FaqTitle>
                    </ItemLeftDiv>
                    <Image src={ArrowRight} width={60} height={60}/>
                </ItemDiv>
                <ItemDiv>
                    <ItemLeftDiv>
                        <Question>Q. 05</Question>
                        <FaqTitle>출발지 설정은 어떻게 하나요?</FaqTitle>
                    </ItemLeftDiv>
                    <Image src={ArrowRight} width={60} height={60}/>
                </ItemDiv>
                <ItemDiv>
                    <ItemLeftDiv>
                        <Question>Q. 06</Question>
                        <FaqTitle>비밀번호를 변경하고 싶어요.</FaqTitle>
                    </ItemLeftDiv>
                    <Image src={ArrowRight} width={60} height={60}/>
                </ItemDiv>
            </Middle>
            <Bottom>
                <BottomTabDiv>
                    <Image src={Home} width={58} height={58}/>
                    <BottomTabUnselected>홈</BottomTabUnselected>
                </BottomTabDiv>
                <BottomTabDiv>
                    <Image src={Location} width={58} height={58}/>
                    <BottomTabUnselected>잇츠로드</BottomTabUnselected>
                </BottomTabDiv>
                <BottomTabDiv>
                    <Image src={Like} width={58} height={58}/> 
                    <BottomTabUnselected>마이찜</BottomTabUnselected>
                </BottomTabDiv>
                <BottomTabDiv>
                    <Image src={My} width={58} height={58}/>
                    <BottomTabSelected>마이</BottomTabSelected>
                </BottomTabDiv>
            </Bottom>
        </Wrapper>
    )
}