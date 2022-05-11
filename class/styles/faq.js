import styled from '@emotion/styled';

export const Wrapper = styled.div`
    width: 640px;
    height: 1100px;
    margin: auto;
    border: 1px solid black;
`

export const Top = styled.div`
    height: 300px;
    border-bottom: 1px solid #cacaca;
    padding: 0 60px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`

export const Middle = styled.div`
    height: 700px;
    display: flex;
    flex-direction: column;
`

export const Bottom = styled.div`
    height: 100px;
    display: flex;
    flex-direction: row;
    border-top: 1px solid #cacaca;
`

export const SearchDiv = styled.div`
    display: flex;
    flex-direction: row-reverse;
`

export const TitleDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Title = styled.div`
    font-weight: bold;
    font-size: 40px;
    line-height: 40px;
`

export const ProfileDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const Profile = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`
export const ProfileName = styled.div`
    font-size: 27px;
    font-weight: bold;
    margin-left: 15px;
`

const Tab = styled.div`
    font-size: 30px;
    line-height: 56px;
    font-weight: bold;
`

export const TabUnselected = styled(Tab)`
    color: #cacaca;
`

export const TabSelected = styled(Tab)`
    color: #ff1b6d;
    border-bottom: 2px solid #ff1b6d;
`

export const ItemDiv = styled.div`
    width: 100%;
    height: 116px;
    display: flex;
    padding: 0 60px;
    flex-direction: row;
    justify-content: space-between;
`

export const ItemLeftDiv = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
`

export const Question = styled.div`
    font-size: 18px;
    color: #adadad;
`

export const FaqTitle = styled.div`
    font-size: 24px;
    color: #444444;
    margin-top: 10px;
`

export const BottomTabDiv = styled.div`
    width: 160px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const BottomTabUnselected = styled.div`
    font-size: 16px;
    color: #adadad;
`

export const BottomTabSelected = styled.div`
    font-size: 16px;
    color: #ff1b6d;
    font-weight: bold;
`