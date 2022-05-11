import { useState } from 'react';
import { Radio } from 'antd';
import * as S from '../../../styles/boards';

export default function main() {

    const [writer, setWriter] = useState("")
    const [password, setPassword] = useState("")
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [address, setAddress] = useState("")
    const [link, setLink] = useState("")

    const [writerError, setWriterError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [titleError, setTitleError] = useState("")
    const [descriptionError, setDescriptionError] = useState("")
    const [addressError, setAddressError] = useState("")
    const [linkError, setLinkError] = useState("")

    const writerChange = (event) => { setWriter(event.target.value) }

    const passwordChange = (event) => { setPassword(event.target.value) }

    const titleChange = (event) => { setTitle(event.target.value) }

    const descriptionChange = (event) => { setDescription(event.target.value) }

    const addressChange = (event) => { setAddress(event.target.value) }

    const linkChange = (event) => { setLink(event.target.value) }

    const submitClicked = (event) => {
        if(writer === "") {
            setWriterError("작성자를 입력해주세요")
        } else {
            setWriterError("")
        }

        if(password === "") {
            setPasswordError("비밀번호를 입력해주세요")
        } else {
            setPasswordError("")
        }

        if(title === "") {
            setTitleError("제목을 입력해주세요")
        } else {
            setTitleError("")
        }

        if(description === "") {
            setDescriptionError("내용을 입력해주세요")
        } else {
            setDescriptionError("")
        }

        if(address === "") {
            setAddressError("주소를 입력해주세요")
        } else {
            setAddressError("")
        }

        if(link === "") {
            setLinkError("링크를 입력해주세요")
        } else {
            setLinkError("")
        }
    }

    return (
        <S.Wrapper>
            <S.Header>
            </S.Header>
            <S.Container>
                <S.Box>
                    <S.Title>게시물 등록</S.Title>
                    <S.Main>
                        <S.InputRow>
                            <S.InputBox>
                                <S.Label>작성자</S.Label>
                                <S.Input type='text' placeholder='이름을 적어주세요.' onChange={writerChange}/>
                                <S.ErrorText>{writerError}</S.ErrorText>
                            </S.InputBox>
                            <S.InputBox>
                                <S.Label>비밀번호</S.Label>
                                <S.Input type='text' placeholder='비밀번호를 입력해주세요.' onChange={passwordChange}/>
                                <S.ErrorText>{passwordError}</S.ErrorText>
                            </S.InputBox>
                        </S.InputRow>
                        <S.InputColumn>
                            <S.Label>제목</S.Label>
                            <S.Input type='text' placeholder='제목을 작성해주세요.' onChange={titleChange}/>
                            <S.ErrorText>{titleError}</S.ErrorText>
                        </S.InputColumn>
                        <S.InputColumn>
                            <S.Label>내용</S.Label>
                            <S.InputArea type='text' placeholder='내용을 작성해주세요.' onChange={descriptionChange}/>
                            <S.ErrorText>{descriptionError}</S.ErrorText>
                        </S.InputColumn>
                        <S.InputColumn>
                            <S.Label>주소</S.Label>
                            <S.AddressBox>
                                <S.AddressInput type='text' placeholder='07250' maxLength='5' onChange={addressChange}/>
                                <S.AddressFindButton>우편번호 검색</S.AddressFindButton>
                            </S.AddressBox>
                            <S.Input></S.Input>
                            <S.Input></S.Input>
                            <S.ErrorText>{addressError}</S.ErrorText>
                        </S.InputColumn>
                        <S.InputColumn>
                            <S.Label>유튜브</S.Label>
                            <S.Input type='text' placeholder='링크를 복사해주세요.' onChange={linkChange}/>
                            <S.ErrorText>{linkError}</S.ErrorText>
                        </S.InputColumn>
                        <S.InputColumn>
                            <S.Label>사진 첨부</S.Label>
                            <S.DivRow>
                                <S.PhotoBox>
                                    <S.PhotoText>+</S.PhotoText>
                                    <S.PhotoText>Upload</S.PhotoText>
                                </S.PhotoBox>
                                <S.PhotoBox>
                                    <S.PhotoText>+</S.PhotoText>
                                    <S.PhotoText>Upload</S.PhotoText>
                                </S.PhotoBox>
                                <S.PhotoBox>
                                    <S.PhotoText>+</S.PhotoText>
                                    <S.PhotoText>Upload</S.PhotoText>
                                </S.PhotoBox>
                            </S.DivRow>
                        </S.InputColumn>
                        <S.InputColumn>
                            <S.Label>메인 설정</S.Label>
                            <S.RadioBox>
                                <Radio name='main'>유튜브</Radio>
                                <Radio name='main' checked="true">사진</Radio>
                            </S.RadioBox>
                        </S.InputColumn>
                        <S.SubmitButton onClick={submitClicked}>등록하기</S.SubmitButton>
                    </S.Main>
                </S.Box>
            </S.Container>
        </S.Wrapper>
    )
}